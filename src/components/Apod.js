import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Apod() {
  const [apod, setApod] = useState([]);
  const { title, date, hdurl, explanation, copyright } = apod;

  useEffect(() => {
    axios
      //.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-01-05"
      )
      .then((response) => setApod(response.data))
      .catch((err) => console.log(err));
  }, []);

  function copy() {
    apod.forEach((e) => {
      if (e === "copyright") return <p>Copyright: {copyright}</p>;
    });
  }

  return (
    <div>
      <h1>{title}</h1>
      <h2>PICTURE OF THE DAY: {date}</h2>
      <img
        src={hdurl}
        alt="NASA Astronomy Picture of the Day"
        width="90%"
        height="600"
      />
      <div>
        <h3>Explanation</h3>
        <p>{explanation}</p>
        {copy()}
      </div>
    </div>
  );
}
