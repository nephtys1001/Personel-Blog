import React from 'react'
import { Link } from "react-scroll";
import "../Style/Navbar.css"

function Links() {
  return (
    <div>
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
  )
}

export default Links