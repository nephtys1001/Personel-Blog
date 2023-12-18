import React from "react";
import logom from "../images/whitelogom.png";
import "../Style/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logom} width={200} alt="logo" />
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <a href="about">Hakkımda </a>
            </li>
            <li>
              <a href="projects">Projeler </a>
            </li>
            <li>
              <a href="contact">İletişim </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
