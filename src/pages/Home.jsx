import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Incredible India 🇮🇳</h1>

          <p>
            Explore India's beautiful destinations, rich culture,
            ancient heritage and unforgettable experiences.
          </p>

          <Link to="/states" className="btn">
            Explore India
          </Link>
        </div>
      </section>


      {/* WELCOME SECTION */}
      <section className="home-section">

        <h2>Welcome to TravelBharat</h2>

        <p>
          Discover the beauty of India through its states, cities,
          historical places, culture, traditions and breathtaking
          landscapes.
        </p>

        <div className="features">

          {/* CARD 1 */}
          <div className="feature-card">

            <div className="feature-icon">
              🗺️
            </div>

            <h3>Explore States</h3>

            <p>
              Discover India's diverse states, famous cities,
              beautiful destinations and local attractions.
            </p>

            <Link to="/states" className="btn">
              Explore States
            </Link>

          </div>


          {/* CARD 2 */}
          <div className="feature-card">

            <div className="feature-icon">
              🏛️
            </div>

            <h3>Heritage & History</h3>

            <p>
              Explore forts, temples, monuments and historical
              places that tell India's incredible story.
            </p>

            <Link to="/states" className="btn">
              Discover Heritage
            </Link>

          </div>


          {/* CARD 3 */}
          <div className="feature-card">

            <div className="feature-icon">
              🎭
            </div>

            <h3>Culture & Traditions</h3>

            <p>
              Experience India's festivals, traditions, food,
              art, music and colorful cultural heritage.
            </p>

            <Link to="/about" className="btn">
              Learn More
            </Link>

          </div>

        </div>

      </section>


      {/* WHY TRAVELBHARAT */}
      <section className="home-section why-section">

        <h2>Why Explore India?</h2>

        <p>
          One country, countless experiences. From the Himalayas
          to the beaches, India has something for every traveler.
        </p>

        <div className="features">

          <div className="feature-card">
            <div className="feature-icon">🏔️</div>

            <h3>Beautiful Nature</h3>

            <p>
              Mountains, beaches, forests, waterfalls and
              breathtaking landscapes.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🛕</div>

            <h3>Rich Heritage</h3>

            <p>
              Ancient temples, magnificent forts and historic
              monuments across India.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🍛</div>

            <h3>Amazing Food</h3>

            <p>
              Taste unique cuisines, traditional dishes and
              flavors from every region.
            </p>
          </div>

        </div>

      </section>


      {/* CTA SECTION */}
      <section className="home-cta">

        <div className="cta-content">

          <h2>Ready to Explore India?</h2>

          <p>
            Start your journey and discover the incredible
            diversity of Bharat.
          </p>

          <Link to="/states" className="btn">
            Start Exploring →
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;