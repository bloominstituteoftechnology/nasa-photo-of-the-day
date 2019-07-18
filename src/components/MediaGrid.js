import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";

import axios from "axios";
import VidData from "./VidData";
import Explain from "./Explain";

export default function MediaGrid({ limit }) {
  const [nasaData, setNasaData] = useState({});
  console.log(nasaData);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=CCXbV8XxG8yA3RamUcCcG6p7d1ZETE3FVa4y3mxf`
      )
      .then(res => {
        console.log("I am visisble", res.data);
        setNasaData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log("oh noes....", err);
      });
  }, []);

  return (
    <div className="media-grid">
      <MediaCard passData={nasaData} />
      <div className="video-container">
        <VidData passData={nasaData} />
      </div>
      <div className="story-card">
        <Explain passData={nasaData} />
      </div>
    </div>
  );
}
