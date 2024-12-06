import React from "react";
import "./navbar.css";

const Navbar = () => {
  const categories = [
    "Kino",
    "Comedy",
    "Mix",
    "Cartoons",
    "Muzik",
    "Futbol",
    "El sanatları",
    "UX Tasarım",
    "Animasyon",
    "Görsel sanatlar",
    "Son yüklenenler",
  ];

  return (
    <div className="navbar">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`nav-link ${index === 0 ? "active" : ""}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
