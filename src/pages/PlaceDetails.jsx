import { useParams, Link } from "react-router-dom";
import states from "../data/states";

function PlaceDetails() {
  const { placeName } = useParams();

  const decodedPlaceName = decodeURIComponent(placeName);

  let selectedPlace = null;
  let selectedState = null;

  states.forEach((state) => {
    if (state.places) {
      const place = state.places.find(
        (item) =>
          item.name.toLowerCase() ===
          decodedPlaceName.toLowerCase()
      );

      if (place) {
        selectedPlace = place;
        selectedState = state;
      }
    }
  });

  if (!selectedPlace) {
    return (
      <section className="details-container">

        <h1>Place Not Found</h1>

        <p>
          Sorry, we could not find this tourist place.
        </p>

        <br />

        <Link to="/states" className="btn">
          ← Back to States
        </Link>

      </section>
    );
  }

  return (
    <section className="place-details">

      <div className="place-hero">

        <img
          src={selectedPlace.image}
          alt={selectedPlace.name}
        />

        <div className="place-hero-overlay">

          <p>
            {selectedState.name}
          </p>

          <h1>
            {selectedPlace.name}
          </h1>

        </div>

      </div>


      <div className="place-content">

        <h2>
          About {selectedPlace.name}
        </h2>

        <p>
          {selectedPlace.description}
        </p>

        <div className="place-info">

          <div>
            <span>📍</span>
            <strong>State</strong>
            <p>{selectedState.name}</p>
          </div>

          <div>
            <span>🏛️</span>
            <strong>Tourist Attraction</strong>
            <p>Popular Destination</p>
          </div>

          <div>
            <span>🇮🇳</span>
            <strong>Country</strong>
            <p>India</p>
          </div>

        </div>

        <Link to="/states" className="btn">
          ← Explore More Places
        </Link>

      </div>

    </section>
  );
}

export default PlaceDetails;