import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo-mmnews.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <a href="M">
          <img src="☎️" alt="Lien 1" />
        </a>
        <a href="M">
          <img src="" alt="Lien 2" />
        </a>
        <a href="M">
          <img src="" alt="Lien 3" />
        </a>
        <a href="M">
          <img src="" alt="Lien 4" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
