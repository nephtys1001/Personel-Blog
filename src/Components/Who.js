import React, { useState, useEffect } from "react";
import "../Style/Who.css";
import htmlpic from "../images/htmlpic.png"
import csspic from "../images/csspic.png"
import jspic from "../images/jspic.png"
import reactjspic from "../images/reactjspic.png"
import kotlinpic from "../images/kotlinpic.png"
import unitypic from "../images/unitypic.png"
import turkishpic from "../images/turkey.png"
import englishpic from "../images/british.png"
import germanpic from "../images/german.png"

function Who() {
  const initialItems = [
    { id: 1, name: 'HTML', category: 'web', image: htmlpic },
    { id: 2, name: 'CSS', category: 'web' , image: csspic },
    { id: 3, name: 'JS', category: 'web', image: jspic },
    { id: 4, name: 'REACT.JS', category: 'web', image: reactjspic },
    { id: 5, name: 'KOTLIN', category: 'mobile' , image: kotlinpic},
    { id: 6, name: 'UNITY', category: 'game', image: unitypic },
    { id: 7, name: 'Turkish', category: 'languages', image: turkishpic },
    { id: 8, name: 'English', category: 'languages' , image: englishpic},
    { id: 9, name: 'german', category: 'languages', image: germanpic },
  ];

  const [items, setItems] = useState(initialItems);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    setAllItems(initialItems);
  }, []);

  const filterByCategory = (category) => {
    const filteredItems = allItems.filter((item) => item.category === category);
    setItems(filteredItems);
  };

  const showAll = () => {
    setItems(allItems);
  };

  return (
    <div className="who" id="talentss">
      <div className="title" >
        <h1 >I'm Computer Engineer</h1>
      </div>

      <div className="talents-select">
        <div className="buttons" >
          <button id="#all" onClick={showAll}>All</button>
          <button id="#web" onClick={() => filterByCategory('web')}>Web</button>
          <button id="#mobile" onClick={() => filterByCategory('mobile')}>Mobile</button>
          <button id="#game" onClick={() => filterByCategory('game')}>Game</button>
          <button id="#language" onClick={() => filterByCategory('languages')}>Languages</button>
        </div>
      </div>

      <div className="talents" >
        <ul>
          {items.map((item) => (
          <li key={item.id}>
         
          {item.image && <img src={item.image} alt={item.name} />}
        </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Who;
