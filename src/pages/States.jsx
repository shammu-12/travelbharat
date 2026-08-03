import { Link } from "react-router-dom";
import states from "../data/states";

function States() {
  return (
    <section className="page-container">

      <h1 className="page-title">
        Explore India State by State
      </h1>

      <p className="page-description">
        Discover India's beautiful states, cities, tourist places,
        culture and heritage.
      </p>

      <div className="states-grid">

        {states.map((state) => (
          <div className="state-card" key={state.name}>

            <img
              src={state.image}
              alt={state.name}
            />

            <div className="state-card-content">

              <h3>{state.name}</h3>

              <p>
                {state.description}
              </p>

              <Link to={`/state/${state.name}`}>
                Explore State →
              </Link>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default States;