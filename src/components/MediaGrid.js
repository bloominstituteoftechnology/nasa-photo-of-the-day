import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import axios from "axios";

export default function MediaGrid({ limit }) {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=CCXbV8XxG8yA3RamUcCcG6p7d1ZETE3FVa4y3mxf`
      )
      .then(res => {
        console.log("I am visisble", res);
      });
  });

  return (
    <div className="media-grid">
      {nasaData.map(nasaUrl => {
        return <MediaCard imgUrl={nasaUrl} />;
      })}
      <div className="media-card">
        <img
          src="https://adorbs-as-a-service.herokuapp.com/api/v1/300w/200h/"
          alt="notadog!"
        />
      </div>
    </div>
  );
}
