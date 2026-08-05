import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return <header className="navbar"><div className="navbar-container">
    <Link to="/" className="navbar-logo"><span>✦</span>Travel<span>Bharat</span></Link>
    <nav className="navbar-links"><NavLink to="/">Home</NavLink><NavLink to="/states">Explore States</NavLink><NavLink to="/search">Search</NavLink><NavLink to="/about">About</NavLink></nav>
    <Link to="/login?mode=admin" className="nav-admin">Admin →</Link>
  </div></header>;
}
