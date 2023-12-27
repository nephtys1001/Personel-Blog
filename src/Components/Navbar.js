import React, { useEffect, useState } from "react";
import logom from "../images/whitelogom.png";
import "../Style/Navbar.css";

import Links from "./Links";
import { CgDetailsMore } from "react-icons/cg";

function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [isOpen,setIsOpen] =useState(true)
  const [isToogleOpen,setIsToggleOpen] =useState(true)


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



  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
  
    handleResize(); // İlk renderda durumu set etmek için
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  console.log(isOpen)


  
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: navbarBackground }}>
        <div className="nav-logo">
          <img src={logom} width={200} alt="logo" />
        </div>

        {isOpen && <div className="nav-links">

          

          <Links/>
         
        </div>}

        {!isOpen && <div className="toogle">

        <CgDetailsMore id="toggle-icon" onClick={() => setIsToggleOpen(!isToogleOpen)} />

       

        {!isToogleOpen && <div className="toogle-links">

      
      <Links/>
       

        </div> }

        </div> }

      

      </nav>
    </div>
  );
}

export default Navbar;
