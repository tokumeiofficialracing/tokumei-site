import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MeetTheTeam from "./pages/MeetTheTeam";
import Games from "./pages/Games";
import Socials from "./pages/Socials";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <Router>
      <nav className="bg-[#31758a] text-white p-4 flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/meet-the-team">Meet the Team</Link>
        <Link to="/games">Games</Link>
        <Link to="/socials">Socials</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/games" element={<Games />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}
