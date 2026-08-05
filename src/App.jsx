import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import States from "./pages/States";
import StateDetails from "./pages/StateDetails";
import PlaceDetails from "./pages/PlaceDetails";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { CatalogProvider } from "./context/CatalogContext";
import "./App.css";

export default function App() { return <CatalogProvider><div className="app"><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/states" element={<States/>}/><Route path="/states/:id" element={<StateDetails/>}/><Route path="/places/:placeName" element={<PlaceDetails/>}/><Route path="/search" element={<Search/>}/><Route path="/login" element={<Login/>}/><Route path="/admin" element={<Admin/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></div></CatalogProvider>; }
