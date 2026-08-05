import states from "./states";

const categories = ["Heritage", "Nature", "Religious", "Adventure"];
// Flickr serves a different travel photograph for each specific place/state tag.
// The lock makes it consistent during a browser session while keeping every card unique.
export const photoFor = (name, variant = 1) => {
  const tags = name.toLowerCase().replace(/[^a-z0-9]+/g, ",").replace(/^,|,$/g, "");
  return `https://loremflickr.com/1200/800/${tags},india?lock=${variant}`;
};

export const destinations = states.flatMap((state) => state.places.map((place, index) => ({
  ...place,
  image: photoFor(`${place.name} ${state.name}`, state.id * 10 + index),
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
