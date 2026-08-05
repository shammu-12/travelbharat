import { createContext, useContext, useEffect, useMemo, useState } from "react";
import states from "../data/states";
import { destinations as starterDestinations } from "../data/destinations";

const CatalogContext = createContext({ destinations: starterDestinations, getDestination: () => undefined });

const toDestination = (record) => {
  const state = states.find((item) => item.name === record.state);
  if (!state) return null;
  return {
    ...record, state,
    image: record.image || "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    bestTime: record.bestTime || "Check local guidance", timings: record.timings || "Check locally before visit",
    fee: record.fee || "Check locally before visit", gallery: record.image ? [record.image] : [], nearby: [],
  };
};

export function CatalogProvider({ children }) {
  const [published, setPublished] = useState([]);
  useEffect(() => { fetch("/api/public/destinations").then((response) => response.ok ? response.json() : []).then((records) => setPublished(records.map(toDestination).filter(Boolean))).catch(() => setPublished([])); }, []);
  const value = useMemo(() => {
    const keys = new Set(starterDestinations.map((item) => `${item.name}|${item.state.id}`));
    const destinations = [...starterDestinations, ...published.filter((item) => !keys.has(`${item.name}|${item.state.id}`))];
    return { destinations, getDestination: (name, stateId) => destinations.find((item) => item.name === name && (!stateId || item.state.id === Number(stateId))) };
  }, [published]);
  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

// This hook is intentionally colocated with its provider so consumers share one catalogue contract.
// eslint-disable-next-line react-refresh/only-export-components
export const useCatalog = () => useContext(CatalogContext);
