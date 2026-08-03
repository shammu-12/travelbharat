import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import States from "./pages/States";
import StateDetails from "./pages/StateDetails";
import PlaceDetails from "./pages/PlaceDetails";
import Search from "./pages/Search";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/states" element={<States />} />
          <Route path="/state/:stateName" element={<StateDetails />} />
          <Route path="/place/:placeName" element={<PlaceDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;