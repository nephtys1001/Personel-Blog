import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../Style/About.css";
import me from "../images/me.png";



import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";



function About() {
  const [name, setName] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullName = "I'm BURAK ALKAN";

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setName(prevName => [...prevName, fullName[currentIndex]]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [currentIndex, fullName.length]);

  return (
    <div className="about" id="about">
      <div className="intro">
        <h4>WELCOME !</h4>
        <h1 id="surname">
          <TransitionGroup>
            {name.map((char, index) => (
              <CSSTransition key={index} timeout={500} classNames="name">
                <span>{char}</span>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </h1>

        <div className="contacts">
      <ul>
        <li><a href="https://www.instagram.com/burakkk.alkan55/"><FaInstagram/></a></li>
        <li><a href="https://www.linkedin.com/in/burak-alkan-827619198/"><FaLinkedinIn/></a></li>
        <li><a href="https://github.com/nephtys1001"><FaGithub/></a></li>
        <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCbHfvTnXzrXHhMdwgMrZdkmdkjzxmzspVlgcrFnRhbZxJSCjktjhrdQhMQTWQPFLBhQgWg"><MdMailOutline/></a></li>
      </ul>
    </div>
        <p>
          Building projects with React.js has been truly rewarding, and after a
          year of practice, I've improved my abilities in creating dynamic web
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
