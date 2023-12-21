import React, { useEffect, useState } from "react";
import logom from "../images/whitelogom.png";
import "../Style/Navbar.css";
import { Link } from "react-scroll";

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
      <nav className="navbar"   style={{ backgroundColor: navbarBackground }}>
        <div className="nav-logo">
          <img src={logom} width={200} alt="logo" />
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000} // Örneğin, animasyon süresini 1000ms olarak ayarlayabilirsiniz
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="talentss"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Talents
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
