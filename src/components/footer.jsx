import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* ABOUT */}
        <div className="footer-column">
          <h3>🇮🇳 TravelBharat</h3>

          <p>
            Discover the beauty, culture, heritage and
            unforgettable destinations of incredible India.
          </p>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/states">Explore States</Link>

          <Link to="/search">Search</Link>

          <Link to="/about">About Us</Link>

        </div>


        {/* EXPLORE */}
        <div className="footer-column">

          <h3>Explore India</h3>

          <p>🏔️ Mountains & Nature</p>

          <p>🏛️ Heritage & History</p>

          <p>🎭 Culture & Traditions</p>

          <p>🍛 Indian Cuisine</p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 TravelBharat. Made with ❤️ for Incredible India 🇮🇳
        </p>

      </div>

    </footer>
  );
}

export default Footer;