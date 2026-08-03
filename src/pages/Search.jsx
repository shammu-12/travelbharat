import { useState } from "react";
import { Link } from "react-router-dom";
import states from "../data/states";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const results = states.filter((state) =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="search-page">

      <div className="search-header">
        <h1>Search India</h1>

        <p>
          Find states and discover amazing places across India.
        </p>

        <input
          type="text"
          className="search-box"
          placeholder="Search for a state..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>


      <div className="search-results">

        {searchTerm === "" ? (
          <div className="search-message">
            <div>🔎</div>

            <h2>Start Exploring</h2>

            <p>
              Type a state name above to find your destination.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="search-message">
            <div>😕</div>

            <h2>No State Found</h2>

            <p>
              We couldn't find a state matching "{searchTerm}".
            </p>

            <Link to="/states" className="btn">
              View All States
            </Link>
          </div>
        ) : (
          <>
            <h2 className="search-results-title">
              Search Results
            </h2>

            <div className="states-grid">

              {results.map((state) => (
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

                    <Link
                      to={`/state/${encodeURIComponent(state.name)}`}
                    >
                      Explore State →
                    </Link>

                  </div>

                </div>
              ))}

            </div>
          </>
        )}

      </div>

    </section>
  );
}

export default Search;