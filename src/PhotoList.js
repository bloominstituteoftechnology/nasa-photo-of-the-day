import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"
import "./App.css";

export default function PhotoList() {
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res.data);
        setPhoto(res.data);
      })
      .catch(err => {
        console.log(`There error is: ${err}`);
      });
  }, 
  //dependency array
  []);

  console.log(photo.hdurl);
  console.log(photo.date);

  return (
    <div>
      {
      <PhotoCard
      key={photo.date}
      title={photo.title}
      explanation={photo.explanation}
      Img={photo.hdurl}
      date={photo.date}
      copyright={photo.copyright}
        />
        }
    </div>
  );
}
