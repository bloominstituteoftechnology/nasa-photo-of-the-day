import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaImage from "./NasaImage";
import ImageInfo from "./ImageInfo";

function App() {
  const [nasaData, setNasaData] = useState({});

  console.log(nasaData);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((resp) => {
        setNasaData(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <p>
        Each day a different image or photograph of our fascinating universe is
        featured, along with a brief explanation written by a professional
        astronomer.{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
      </p>
      <p>{nasaData.date}</p>
      <NasaImage nasaImage={nasaData} />
      <ImageInfo imageInfo={nasaData} />
    </div>
  );
}

export default App;
