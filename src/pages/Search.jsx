import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { categoryList } from "../data/destinations";
import { useCatalog } from "../context/CatalogContext";

export default function Search() {
  const { destinations } = useCatalog();
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("All");
  const items = useMemo(() => destinations.filter((item) => (`${item.name} ${item.state.name}`).toLowerCase().includes(term.toLowerCase()) && (category === "All" || item.category === category)), [destinations, term, category]);

  return <main className="page search-page"><div className="page-heading"><p className="intro-label">SEARCH & DISCOVERY</p><h1>Find your next destination</h1><input autoFocus className="filter-input large-input" value={term} onChange={(event) => setTerm(event.target.value)} placeholder="Search place or state…" /><div className="category-filters">{categoryList.map((item) => <button onClick={() => setCategory(item)} className={category === item ? "selected" : ""} key={item}>{item}</button>)}</div></div><p className="result-count">{items.length} destinations found {category !== "All" && `in ${category}`}</p><div className="search-grid">{items.map((item) => <Link to={`/places/${encodeURIComponent(item.name)}?state=${item.state.id}`} className="search-card" key={`${item.name}-${item.state.id}`}><img src={item.image} alt="" /><div><p>{item.state.name} · {item.category}</p><h2>{item.name}</h2><span>View details →</span></div></Link>)}</div>{items.length === 0 && <div className="search-empty">No destinations match this search. Try another word or category.</div>}</main>;
}
