import { useParams, useSearchParams, Link } from "react-router-dom";
import { useCatalog } from "../context/CatalogContext";

export default function PlaceDetails() {
  const { placeName } = useParams();
  const [query] = useSearchParams();
  const name = decodeURIComponent(placeName);
  const { getDestination } = useCatalog();
  const place = getDestination(name, query.get("state"));

  if (!place) return <main className="page">Destination not found.</main>;

  return <main className="place-details-page">
    <Link to={`/states/${place.state.id}`} className="state-back-link">← Back to {place.state.name}</Link>
    <img className="place-banner" src={place.image} alt={name} />
    <p className="detail-label">{place.state.name.toUpperCase()} · {place.category.toUpperCase()}</p>
    <h1>{name}</h1>
    <p className="place-description">{name} is a memorable {place.category.toLowerCase()} destination in {place.state.name}, known for its culture, landscape and local experiences. Check local guidance before visiting.</p>
    <div className="place-info"><div><b>State</b><span>{place.state.name}</span></div><div><b>Best time to visit</b><span>{place.bestTime}</span></div><div><b>Timings</b><span>{place.timings}</span></div><div><b>Entry fee</b><span>{place.fee}</span></div></div>
    <section className="gallery-section"><p className="detail-label">GALLERY & MEDIA</p><h2>See the destination</h2><div className="gallery-grid">{place.gallery.length ? place.gallery.map((image, index) => <img key={image} src={image} alt={`${name} view ${index + 1}`} />) : <p>Gallery will be added after content verification.</p>}</div></section>
    <section className="nearby-section"><p className="detail-label">NEARBY ATTRACTIONS</p><h2>Continue your journey</h2><div className="nearby-list">{place.nearby.map((item) => <span key={item}>{item}</span>)}</div></section>
    <a className="map-link" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/${encodeURIComponent(`${name} ${place.state.name}`)}`}>Get directions on Google Maps ↗</a>
  </main>;
}
