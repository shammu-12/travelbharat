import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || "Unable to sign in. Please try again.");
      localStorage.setItem("tb-token", data.token);
      localStorage.setItem("tb-role", data.role);
      localStorage.setItem("tb-email", data.email);
      navigate("/admin");
    } catch (err) { setError(err.message || "Unable to connect to the server."); }
  };

  return <main className="login-page"><form className="login-card" onSubmit={login}>
    <p className="intro-label">SECURE CONTENT MANAGEMENT</p>
    <h1>Admin sign in</h1>
    <p>Sign in to add, review and publish destination information.</p>
    <label className="login-label">Email address<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter admin email" required autoComplete="username" /></label>
    <label className="login-label">Password<div className="password-field"><input type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" required autoComplete="current-password" /><button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button></div></label>
    <button>Sign in to admin panel</button>
    {error && <p className="login-error">{error}</p>}
  </form></main>;
}
