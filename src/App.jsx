import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Games from "./pages/Games";
import Gallery from "./pages/Gallery";
import Socials from "./pages/Socials";
import Apply from "./pages/Apply";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
