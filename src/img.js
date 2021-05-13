import React, { useState } from "react";
import axios from "axios";
import { previousImg, nextImg } from "./buttons";

const nasaData = axios.get(
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-01&end_date=2017-07-30"
);

axios
  .get(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-01&end_date=2017-07-30"
  )
  .then((futureData) => {
    console.log("2. here is future data", futureData);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("1. here is the result", nasaData);

export default function Img() {
  const [img, setImg] = useState(nasaData[15].url);
  console.log(img);

  return (
    <div className="imgContainer">
      <img src={img}></img>
    </div>
  );
}
