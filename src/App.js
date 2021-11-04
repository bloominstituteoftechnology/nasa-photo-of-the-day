import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";

function App() {
  const [data, setData] = useState([]);
  const [navMenuItems, setNavMenuItems] = useState(['Alien Files', 'Get Abducted Today', 'Learn More', 'Contact Aliens']);

  useEffect(() => {
    fetchData();
    // console.log('I am useEffect');
  }, []);

  const fetchData = () => {
    console.log("first console", data);
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=xrftxMdMsd8egs0RWP639kTpXfjCZCJ9XTWSlOFu&count=6"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log(" Hey im unsuccessful");
      });
  };

  return (
    <div className="App">
      <h1>Nasa's World</h1>
      <div className="card-container">
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
      <Footer menuItems={navMenuItems} />
    </div>
  );
}

export default App;
