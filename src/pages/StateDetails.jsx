import { useParams, Link } from "react-router-dom";
import states from "../data/states";

function StateDetails() {
  const { stateName } = useParams();

  const decodedStateName = decodeURIComponent(stateName);

  const state = states.find(
    (item) =>
      item.name.toLowerCase() === decodedStateName.toLowerCase()
  );

  if (!state) {
    return (
      <section className="details-container">
        <h1>State Not Found</h1>

        <p>
          Sorry, we could not find this state.
        </p>

        <br />

        <Link to="/states" className="btn">
          ← Back to States
        </Link>
      </section>
    );
  }

  return (
    <section className="state-details-page">

      {/* STATE HERO */}

      <div className="state-detail-hero">

        <img
          src={state.image}
          alt={state.name}
        />

        <div className="state-detail-overlay">

          <p>Explore Incredible India</p>

          <h1>{state.name}</h1>

        </div>

      </div>


      {/* STATE INFORMATION */}

      <div className="state-detail-content">

        <h2>About {state.name}</h2>

        <p className="state-description">
          {state.description}
        </p>


        {/* CAPITAL */}

        <div className="state-info-grid">

          <div className="state-info-card">

            <div className="state-info-icon">
              🏛️
            </div>

            <h3>Capital</h3>

            <p>
              {state.capital || "Information not available"}
            </p>

          </div>


          {/* LANGUAGE */}

          <div className="state-info-card">

            <div className="state-info-icon">
              🗣️
            </div>

            <h3>Language</h3>

            <p>
              {state.language || "Information not available"}
            </p>

          </div>


          {/* REGION */}

          <div className="state-info-card">

            <div className="state-info-icon">
              📍
            </div>

            <h3>Region</h3>

            <p>
              {state.region || "India"}
            </p>

          </div>

        </div>


        {/* MAP */}

        <div className="map-section">

          <h2>
            📍 {state.name} Map
          </h2>

          <p>
            Explore the location of {state.name} on the map.
          </p>

          <div className="map-container">

            <iframe
              title={`${state.name} Map`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                state.name + ", India"
              )}&output=embed`}
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>


        {/* PLACES */}

        {state.places && state.places.length > 0 && (

          <div className="places-section">

            <h2>
              Popular Places in {state.name}
            </h2>

            <p>
              Explore some of the famous tourist destinations.
            </p>


            <div className="places-grid">

              {state.places.map((place) => (

                <div
                  className="place-card"
                  key={place.name}
                >

                  <img
                    src={place.image}
                    alt={place.name}
                  />

                  <div className="place-card-content">

                    <h3>{place.name}</h3>

                    <p>
                      {place.description}
                    </p>

                    <Link
                      to={`/place/${encodeURIComponent(
                        place.name
                      )}`}
                    >
                      Explore Place →
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}


        <Link
          to="/states"
          className="btn"
        >
          ← Explore Other States
        </Link>

      </div>

    </section>
  );
}

export default StateDetails;