import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col } from "reactstrap";
import "./App.css";

export const BASE_URL = "https://api.nasa.gov/planetary/apod";
export const API_KEY = "qXYnhDSG0waj3uWYCmaxNAhsF5ghT3Wf7o1fHiby";

function App() { 

  const [nasaPOD, setNasaPOD] = useState([]);
  
  // Date
  let date = new Date().toISOString().slice(0, 10);

  // styling

  // Colors
  const colorsTheme = {
    color: "#ffd700",
    backgroundColor: "#4b0082"
  };

  // Text
  const text = {
    color: "#a296ca",
    padding: "5rem",
    margin: "3rem"
  };

  // Image
  const image = {
    height: 400,
    width: 400
  };

  // useEffect
  useEffect(() => {
    const pictureOfTheDay = () => {
      axios.get("https://api.nasa.gov/planetary/apod")
       .then(res => {
         setNasaPOD(res.data);
  
       }).catch(err => {
         console.error(err);
       })
    }

    pictureOfTheDay();
  }, [])

  

  return (
    <div className="App">
      <Card style = {colorsTheme} >
        <Col sm="12" md={{ size: 9, offset: 6}}></Col>
        <h1>NASA Photo Of The Day!</h1>
        <img src = {nasaPOD.url} alt = "Space" style = {image} />
        
        <div className = "text">
          <h2>{nasaPOD.title}</h2>
          <h3>{nasaPOD.data}</h3>
          <p style = {text}>{nasaPOD}</p>
        </div>
      </Card>
    </div>
  );
}

export default App;
