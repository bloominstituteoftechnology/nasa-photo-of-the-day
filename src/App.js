import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NasaCard from "./Components/NasaCard";

function App() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=fRhzD5Fq2Qcsf7R8H3XFGTiHPtp322SiK7HAVWl1`
      )
      .then(res => {
        const otherNasa = res.data;
        console.log(otherNasa);
        setNasa(otherNasa);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div>
      <NasaCard
        title={nasa.title}
        date={nasa.date}
        explanation={nasa.explanation}
      />
      <img src={nasa.url} />
    </div>
  );
}

export default App;
