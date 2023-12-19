import React, { useEffect, useState } from "react";
import logom from "../images/whitelogom.png";
import "../Style/Navbar.css";

function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const changeColorPosition = 80;

      if (scrollPosition > changeColorPosition) {
        setNavbarBackground("#00000080");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: navbarBackground }} >
        <div className="nav-logo">
          <img src={logom} width={200} alt="logo"  />
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#about">About </a>
            </li>
            <li>
              <a href="#projects">Projects </a>
            </li>
            <li>
              <a href="#contact">Contact </a>
            </li>
          </ul>
        </div>

        
      </nav>
    </div>
  );
}

export default Navbar;
