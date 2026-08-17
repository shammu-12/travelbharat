import states from "./states";

const categories = ["Heritage", "Nature", "Religious", "Adventure"];
const localDestinationImages = {
  "Tirupati": "/images/destinations/tirupathi[1].jpg", "Araku Valley": "/images/destinations/araku-valley[1].jpg", Visakhapatnam: "/images/destinations/visakhapatnam[1].jpg", Papikondalu: "/images/destinations/papikondalu[1].png", Lepakshi: "/images/destinations/lepakshi[1].jpg",
  Tawang: "/images/destinations/tawang[1].jpg", Bomdila: "/images/destinations/bomdila[2].jpg", Kaziranga: "/images/destinations/kaziranga[1].jpg", "Kamakhya Temple": "/images/destinations/kamakhya_temple[1].jpg", "Manas National Park": "/images/destinations/manas_national_park[1].jpg",
  "Bodh Gaya": "/images/destinations/bodh_gaya[1].jpg", Rajgir: "/images/destinations/rajgir[1].jpg", "Patna Sahib": "/images/destinations/patna_sahib[1].jpg", "Chitrakote Falls": "/images/destinations/chitrakote_falls[1].jpg", "Tirathgarh Falls": "/images/destinations/tirathgarh_falls[1].jpg", Barnawapara: "/images/destinations/barnawapara[2].jpg",
  "Baga Beach": "/images/destinations/baga-sea-beach[2].jpg", Calangute: "/images/destinations/galangute[1].jpg", "Dudhsagar Falls": "/images/destinations/Doodhsagar_Fall[1].jpg", "Fort Aguada": "/images/destinations/Fort_aguada[1].jpg",
  "Statue of Unity": "/images/destinations/statue_of_unity[1].jpg", "Gir Forest": "/images/destinations/gir_forest[1].jpg", "Somnath Temple": "/images/destinations/somnath_temple[1].jpg",
  Kurukshetra: "/images/destinations/kurukshetra[1].jpg", "Pinjore Garden": "/images/destinations/Pinjore_Garden_Panchkula[1].jpg", "Sultanpur Bird Sanctuary": "/images/destinations/sulthapur_bird_sanctuary[1].jpg",
  Shimla: "/images/destinations/simla[1].jpg", Manali: "/images/destinations/manali[1].jpg", Dharamshala: "/images/destinations/dharmashala[1].jpg", "Spiti Valley": "/images/destinations/Spiti-Valley[1].jpg",
  "Dassam Falls": "/images/destinations/dassam-falls[2].jpg", "Hundru Falls": "/images/destinations/hundru_falls[1].jpg", "Betla National Park": "/images/destinations/betla_National_park[1].jpg",
  "Mysore Palace": "/images/destinations/Mysore_Palace[1].jpg", Coorg: "/images/destinations/coorg[1].jpg", "Jog Falls": "/images/destinations/Jog_Falls[1].jpg"
};
// Flickr serves a different travel photograph for each specific place/state tag.
// The lock makes it consistent during a browser session while keeping every card unique.
export const photoFor = (name, variant = 1) => {
  const tags = name.toLowerCase().replace(/[^a-z0-9]+/g, ",").replace(/^,|,$/g, "");
  return `https://loremflickr.com/1200/800/${tags},india?lock=${variant}`;
};

export const imageFor = (name, fallback, variant = 1) => localDestinationImages[name] || fallback || photoFor(name, variant);

export const destinations = states.flatMap((state) => state.places.map((place, index) => ({
  ...place,
  image: imageFor(place.name, place.image, state.id * 10 + index),
  state,
  category: categories[(index + state.id) % categories.length],
  bestTime: index % 2 ? "October – March" : "September – February",
  timings: "Check locally before visit",
  fee: index % 3 ? "Entry fee may apply" : "Free entry",
  nearby: state.places.filter((item) => item.name !== place.name).slice(0, 3).map((item) => item.name),
  gallery: [
    photoFor(`${place.name} ${state.name}`, state.id * 100 + index),
    photoFor(`${place.name} travel`, state.id * 100 + index + 1),
    photoFor(`${state.name} tourism`, state.id * 100 + index + 2)
  ]
})));

export const categoryList = ["All", ...categories];

export const getDestination = (name, stateId) => destinations.find((item) =>
  item.name === name && (!stateId || item.state.id === Number(stateId))
);
