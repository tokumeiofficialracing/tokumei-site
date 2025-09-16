import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/assets/header.png" alt="Tokumei Banner" className="banner" />
      </Link>
      <div className="nav-links">
        <Link to="/team">Meet the Team</Link>
        <Link to="/games">Games</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/socials">Socials</Link>
        <Link to="/apply" className="apply-btn">Apply to Join</Link>
      </div>
    </nav>
  );
}

export default Navbar;
