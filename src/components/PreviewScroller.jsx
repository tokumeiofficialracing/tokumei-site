import React from "react";
import { Link } from "react-router-dom";

const previews = [
  { title: "Welcome", text: "Learn what Tokumei is all about", path: "/" },
  { title: "Team", text: "Meet the drivers and staff", path: "/team" },
  { title: "Games", text: "Our racing platforms", path: "/games" },
  { title: "Gallery", text: "Images & media", path: "/gallery" },
  { title: "Socials", text: "Join our community", path: "/socials" },
  { title: "Apply", text: "Join Tokumei Racing", path: "/apply" },
];

export default function PreviewScroller() {
  return (
    <div className="preview-scroller">
      <h2>Explore Tokumei</h2>
      <div className="scroll-container">
        {previews.map((item, idx) => (
          <div key={idx} className="preview-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link to={item.path} className="btn">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
