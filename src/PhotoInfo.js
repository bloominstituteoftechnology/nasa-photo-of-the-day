import React, { useState, useEffect } from "react";
import axios from "axios";

function PhotoInfo() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setInfo(response.data);
      })
      .catch(error => {
        console.log("The photo was not returned.");
      });
  }, []);
  return (
    <div className="Info-container">
      <h2>{info.title}</h2>
      <p className="date">Date: {info.date}</p>
      <p>{info.explanation}</p>
    </div>
  );
}

export default PhotoInfo;
