import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo-mmnews.png";
import pics1 from "../images/telephone.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <a href="M">
          <img src={pics1} alt="Lien 1" />
        </a>
        <a href="M">
          <img src="" alt="Lien 2" />
        </a>
        <a href="M">
          <img src="" alt="Lien 3" />
        </a>
        <a href="M">
          <img src="{pics1}" alt="Lien 4" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
