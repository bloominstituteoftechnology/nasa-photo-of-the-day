import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";
import "./App.css";

let year,
  month,
  day = 0;

year = Math.ceil(Math.random() * (2020 - 2015) + 2015);
day = Math.ceil(Math.random() * (28 - 1) + 1);
month = Math.ceil(Math.random() * (12 - 1) + 1);

if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = "0" + month;
}

console.log(year.toString() + "-" + month.toString() + "-" + day.toString());

const nasaApi =
  "https://api.nasa.gov/planetary/apod?api_key=6s8lcv8nth7JkF1rcx3Ng8jGwvWcXbFdGb4VNbcy&date=" +
  year.toString() +
  "-" +
  month.toString() +
  "-" +
  day.toString();

function App() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    axios
      .get(nasaApi)
      .then((response) => setApod(response.data))
      .catch((error) => error);
  }, []);

  return (
    <div className="App">
      <h1> Nasa Image of the Day </h1>
      {
        <Image image={apod} />
        // console.log(apod)
      }
    </div>
  );
}

export default App;
