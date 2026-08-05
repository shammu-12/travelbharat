import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT || 3001);
const root = path.dirname(fileURLToPath(import.meta.url));
const dbFile = path.join(root, "data.json");
const envFile = path.join(root, ".env");

if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, "");
  }
}

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
const secret = process.env.JWT_SECRET;
const configured = Boolean(adminEmail && adminPassword && secret);
const adminHash = configured ? bcrypt.hashSync(adminPassword, 12) : null;

const read = () => {
  try { return JSON.parse(fs.readFileSync(dbFile, "utf8")); }
  catch { return { destinations: [] }; }
};
const write = (data) => fs.writeFileSync(dbFile, JSON.stringify(data, null, 2));
const cleanText = (value, max = 500) => String(value || "").trim().slice(0, max);
const allowedFields = ["name", "state", "category", "description", "bestTime", "timings", "fee", "map", "image", "status"];
const cleanDestination = (body) => Object.fromEntries(allowedFields.map((field) => [field, cleanText(body?.[field], field === "description" ? 1200 : 500)]));

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json({ limit: "100kb" }));

const auth = (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!configured) return res.status(503).json({ message: "Admin authentication is not configured. Add a private .env file first." });
  try {
    const user = jwt.verify(token, secret);
    if (user.role !== "Administrator") throw new Error("Forbidden");
    req.user = user;
    next();
  } catch { res.status(401).json({ message: "Please sign in as an administrator." }); }
};

app.get("/api/health", (req, res) => res.json({ status: "ok", adminConfigured: configured }));
app.post("/api/auth/login", async (req, res) => {
  if (!configured) return res.status(503).json({ message: "Admin login is not configured. Add your private server settings first." });
  const email = cleanText(req.body?.email, 160).toLowerCase();
  const validPassword = await bcrypt.compare(String(req.body?.password || ""), adminHash);
  if (email !== adminEmail.toLowerCase() || !validPassword) return res.status(401).json({ message: "Invalid email or password." });
  const token = jwt.sign({ email: adminEmail, role: "Administrator" }, secret, { expiresIn: "8h" });
  res.json({ token, email: adminEmail, role: "Administrator" });
});

app.get("/api/public/destinations", (req, res) => res.json((read().destinations || []).filter((item) => item.status === "Verified")));
app.get("/api/destinations", auth, (req, res) => res.json(read().destinations || []));
app.post("/api/destinations", auth, (req, res) => {
  const item = cleanDestination(req.body);
  if (!item.name || !item.state || !item.category || !item.description) return res.status(400).json({ message: "Name, state, category and description are required." });
  const db = read(); db.destinations ||= [];
  const now = new Date().toISOString();
  const record = { id: Date.now(), ...item, status: "Pending verification", createdAt: now, updatedAt: now };
  db.destinations.unshift(record); write(db); res.status(201).json(record);
});
app.patch("/api/destinations/:id", auth, (req, res) => {
  const db = read(); const item = (db.destinations || []).find((entry) => String(entry.id) === req.params.id);
  if (!item) return res.status(404).json({ message: "Destination not found." });
  const changes = cleanDestination(req.body);
  if (changes.status && !["Pending verification", "Verified"].includes(changes.status)) return res.status(400).json({ message: "Invalid status." });
  for (const field of allowedFields) if (changes[field]) item[field] = changes[field];
  item.updatedAt = new Date().toISOString(); write(db); res.json(item);
});
app.delete("/api/destinations/:id", auth, (req, res) => {
  const db = read(); const initial = (db.destinations || []).length;
  db.destinations = db.destinations.filter((entry) => String(entry.id) !== req.params.id);
  if (db.destinations.length === initial) return res.status(404).json({ message: "Destination not found." });
  write(db); res.sendStatus(204);
});

app.listen(port, () => console.log(`TravelBharat API running on http://localhost:${port}`));
