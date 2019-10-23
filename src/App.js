import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [nasaData, setNasaData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ey66eWBrtfW9TOIVS4F75WoJIBvAZAE4sWAhqaKF"
      )
      .then(res => {
        setNasaData(res.data);
      })

      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>NASA Photo of the Day App</h1>
      <div className="flexbox">
        <div className="text">
          <h2>{nasaData.title}</h2>
          <p>{nasaData.explanation}</p>
        </div>
        <div>
          <img src={nasaData.url} alt={nasaData.title}></img>
          <p>{nasaData.date}</p>
        </div>
      </div>
      <footer>Anna made this!</footer>
    </div>
  );
}

export default App;
