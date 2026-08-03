import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        🇮🇳 TravelBharat
      </Link>

      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/states">
          States
        </Link>

        <Link to="/search">
          Search
        </Link>

        <Link to="/about">
          About
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;