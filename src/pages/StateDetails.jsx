import { useParams, Link } from "react-router-dom";
import states from "../data/states";
import { photoFor } from "../data/destinations";
import { useCatalog } from "../context/CatalogContext";

export default function StateDetails() {
  const { id } = useParams();
  const state = states.find((item) => item.id === Number(id));
  const { destinations } = useCatalog();
  if (!state) return <main className="page">State not found.</main>;
  const places = destinations.filter((item) => item.state.id === state.id);

  return <main className="state-details-page"><div className="state-details-wrapper"><Link to="/states" className="state-back-link">← All states</Link><section className="state-detail-hero"><img src={photoFor(`${state.name} tourism`, state.id)} className="state-detail-image" alt="" /><div className="state-detail-overlay" /><div className="state-detail-title"><p>EXPLORE INDIA</p><h1>{state.name}</h1><span>{state.description}</span></div></section><section className="state-detail-content"><div className="state-about"><p className="detail-label">ABOUT THE REGION</p><h2>Discover {state.name}</h2><p className="state-description">{state.description} Plan a trip with a curated list of well-known places and location information.</p></div><div className="state-info-card"><div className="info-icon">⌂</div><div><span>STATE SNAPSHOT</span><h3>{state.capital} · {state.language} · {state.population}</h3></div></div><div className="famous-section"><p className="detail-label">MUST-SEE PLACES</p><h2>Places to explore</h2><div className="places-grid">{places.map((place) => <Link to={`/places/${encodeURIComponent(place.name)}?state=${state.id}`} className="place-card" key={place.id || place.name}><img src={place.image} alt={place.name} /><h3>{place.name}</h3><span>View travel details →</span></Link>)}</div></div><a className="map-link" href={`https://www.google.com/maps/search/${encodeURIComponent(state.name)}`} target="_blank" rel="noreferrer">Open {state.name} in Google Maps ↗</a></section></div></main>;
}
