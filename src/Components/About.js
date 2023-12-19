import React from "react";
import "../Style/About.css";
import me from "../images/me.png";

function About() {
  return (
    <div className="about" id="about">
      <div className="intro">
        <h4>WELCOME !</h4>
        <h1>
          I Am <span> Software Developer</span>
        </h1>
        <p>
          Building projects with React.js has been truly rewarding, and after a
          year of practice , I've improved my abilities in creating dynamic web
          applications. 
        </p>
      </div>

      <div className="photo">
        <img src={me} width={400} alt="fotom" />
      </div>

   
     

      

      
    </div>
  );
}

export default About;
