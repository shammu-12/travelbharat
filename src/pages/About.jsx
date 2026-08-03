function About() {
  return (
    <section className="about-page">

      {/* HEADER */}
      <div className="about-header">
        <h1>About TravelBharat</h1>

        <p>
          Discover India through its beautiful destinations,
          rich culture, history and heritage.
        </p>
      </div>


      {/* ABOUT CONTENT */}
      <div className="about-content">

        <div className="about-card">
          <div className="about-icon">🇮🇳</div>

          <h2>Discover Incredible India</h2>

          <p>
            TravelBharat is a platform created to help travelers
            explore the beauty and diversity of India.
          </p>

          <p>
            From majestic mountains and peaceful beaches to
            historical monuments, temples and vibrant cities,
            India offers countless experiences to discover.
          </p>
        </div>


        <div className="about-card">
          <div className="about-icon">🌏</div>

          <h2>Our Mission</h2>

          <p>
            Our goal is to make it easier for people to discover
            India's states, cities, tourist attractions, culture,
            traditions and heritage.
          </p>

          <p>
            TravelBharat brings useful travel information together
            in one simple and easy-to-explore platform.
          </p>
        </div>

      </div>


      {/* FEATURES */}
      <div className="about-features">

        <div className="about-feature">
          <span>🏛️</span>
          <h3>Heritage</h3>
          <p>
            Explore India's historical monuments,
            forts and ancient temples.
          </p>
        </div>

        <div className="about-feature">
          <span>🎭</span>
          <h3>Culture</h3>
          <p>
            Learn about India's festivals,
            traditions, art and music.
          </p>
        </div>

        <div className="about-feature">
          <span>🏔️</span>
          <h3>Destinations</h3>
          <p>
            Discover beautiful places and
            unforgettable travel experiences.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;