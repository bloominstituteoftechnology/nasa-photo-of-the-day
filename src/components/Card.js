import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Card() {
  const [apod, setApod] = useState([]);
  const { title, date, hdurl } = apod;

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => setApod(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <h2>PICTURE OF THE DAY: {date}</h2>
      <img src={hdurl} alt="NASA Astronomy Picture of the Day" />
      <button onClick={() => console.log("clicked")}>Learn more</button>
    </div>
  );
}
