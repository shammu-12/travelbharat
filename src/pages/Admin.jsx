import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import states from "../data/states";

const api = (url, options = {}) => fetch(url, { ...options, headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("tb-token") || ""}`, ...options.headers } });
const blank = { name: "", state: "", category: "", description: "", bestTime: "", timings: "", fee: "", map: "", image: "" };

export default function Admin() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState(blank);
  const [editing, setEditing] = useState(null);
  const [notice, setNotice] = useState("");
  const navigate = useNavigate();
  const load = useCallback(async () => {
    const response = await api("/api/destinations");
    if (response.status === 401) return navigate("/login");
    if (!response.ok) return setNotice("Unable to load destination records. Start the API with npm run dev:full.");
    setRecords(await response.json());
  }, [navigate]);
  useEffect(() => {
    if (localStorage.getItem("tb-role") !== "Administrator") { navigate("/login"); return undefined; }
    const timer = setTimeout(() => { void load(); }, 0);
    return () => clearTimeout(timer);
  }, [load, navigate]);
  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    const endpoint = editing ? `/api/destinations/${editing}` : "/api/destinations";
    const response = await api(endpoint, { method: editing ? "PATCH" : "POST", body: JSON.stringify(form) });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) return setNotice(data.message || "Unable to save this destination.");
    setNotice(editing ? "Destination updated successfully." : "Destination saved as pending verification.");
    setForm(blank); setEditing(null); load();
  };
  const edit = (record) => { const values = Object.fromEntries(Object.entries(record).filter(([key]) => !["id", "status", "createdAt", "updatedAt"].includes(key))); setForm({ ...blank, ...values }); setEditing(record.id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const verify = async (record) => { await api(`/api/destinations/${record.id}`, { method: "PATCH", body: JSON.stringify({ status: "Verified" }) }); setNotice("Destination published."); load(); };
  const remove = async (id) => { if (!window.confirm("Delete this destination record?")) return; await api(`/api/destinations/${id}`, { method: "DELETE" }); setNotice("Destination deleted."); load(); };
  const signOut = () => { ["tb-token", "tb-role", "tb-email"].forEach((key) => localStorage.removeItem(key)); navigate("/"); };

  return <main className="page admin-page"><div className="page-heading"><p className="intro-label">SECURE CONTENT MANAGEMENT</p><h1>TravelBharat Admin</h1><p>Add, update, verify and manage destination information.</p><button className="logout" onClick={signOut}>Sign out</button></div>
    <div className="admin-stats"><div><b>{states.length}</b><span>States & UTs</span></div><div><b>{records.filter((record) => record.status === "Verified").length}</b><span>Published records</span></div><div><b>{records.filter((record) => record.status !== "Verified").length}</b><span>Pending review</span></div></div>
    <section className="admin-panel"><div><h2>{editing ? "Update destination" : "Add a destination"}</h2><p>Only verified records are available through the public destination API.</p></div><form onSubmit={submit}><input name="name" value={form.name} onChange={updateField} required placeholder="Destination name" /><div className="form-row"><select name="state" value={form.state} onChange={updateField} required><option value="" disabled>Select state</option>{states.map((state) => <option key={state.id}>{state.name}</option>)}</select><select name="category" value={form.category} onChange={updateField} required><option value="" disabled>Category</option><option>Heritage</option><option>Nature</option><option>Religious</option><option>Adventure</option></select></div><textarea name="description" value={form.description} onChange={updateField} required placeholder="Destination description and historical significance" /><div className="form-row"><input name="bestTime" value={form.bestTime} onChange={updateField} placeholder="Best time to visit" /><input name="timings" value={form.timings} onChange={updateField} placeholder="Opening timings" /></div><div className="form-row"><input name="fee" value={form.fee} onChange={updateField} placeholder="Entry fee" /><input name="image" value={form.image} onChange={updateField} placeholder="Image URL" /></div><input name="map" value={form.map} onChange={updateField} placeholder="Google Maps link" /><button>{editing ? "Save changes" : "Add for review"}</button>{editing && <button type="button" className="login-link" onClick={() => { setEditing(null); setForm(blank); }}>Cancel edit</button>}{notice && <p className="saved">{notice}</p>}</form></section>
    <section className="admin-records"><h2>Destination records</h2>{records.length === 0 ? <p>No submitted destinations yet.</p> : <div className="record-list">{records.map((record) => <div key={record.id}><div><b>{record.name}</b><span>{record.state} · {record.category} · {record.status}</span></div><div className="record-actions"><button onClick={() => edit(record)}>Edit</button>{record.status !== "Verified" && <button className="verified" onClick={() => verify(record)}>Publish</button>}<button className="delete" onClick={() => remove(record.id)}>Delete</button></div></div>)}</div>}</section>
  </main>;
}
