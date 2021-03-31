import React, { useState, useEffect } from "react";
import axios from "axios";
import "../src/NasaPhoto.css";

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ZZG7ii4zpuleiAXp5Jd4iMPBUvtwZiSeb687lvjF"
      )
      .then((res) => {
        console.log(res.data);
        setPhotoData(res.data);
      })
      .catch((err) => {
        console.log("oops", err);
      });
  }, []);

  return (
    <div className="container">
      <h1>{photoData.title}</h1>
      <p>{photoData.data}</p>
      <img src={photoData.url} alt={photoData.title} />
      <p>{photoData.explanation}</p>
      <p>{photoData.copyright}</p>
    </div>
  );
};

export default NasaPhoto;
