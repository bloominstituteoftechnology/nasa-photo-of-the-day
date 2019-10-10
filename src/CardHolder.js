import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function CardHolder() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=nKU1ijTbpGXRXzssZ1jZch0cwu2SkMW1lRgFl440`
      )
      .then(response => {
        console.log(response);
        setApod(response.data)
      })
      .catch(error => {
        console.log("Houston we have a problem", error);
      });
  }, []);

  return (
    <div className="container">
      <PhotoCard title={apod.title} imgUrl={apod.hdurl} description={apod.explanation}
      date={apod.date} />
    </div>
  );
}

