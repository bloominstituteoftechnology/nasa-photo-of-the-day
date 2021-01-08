import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Copyright from "./Copyright";

export default function Apod() {
  const [apod, setApod] = useState([]);
  const { title, date, hdurl, explanation } = apod;

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
      <img
        src={hdurl}
        alt="NASA Astronomy of the Day"
        width="90%"
        height="600"
      />
      <div>
        <h3>Explanation</h3>
        <p>{explanation}</p>
        <Copyright data={apod} />
      </div>
    </div>
  );
}
