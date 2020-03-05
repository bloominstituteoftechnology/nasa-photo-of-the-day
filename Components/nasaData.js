import React, { useEffect, useState } from "./node_modules/react";
import NasaCard from "./NasaCard";
import axios from "./node_modules/axios";

function NasaData() {
  let [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=CvVuCSzzIfXhBUwfrhe6lrL1wwtaScU3EqWNuKXs"
      )
      .then(response => {
        console.log(response.data);
        setNasaData(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  return (
    <div className="image">
      <NasaCard
        key={nasaData.id}
        title={nasaData.title}
        explanation={nasaData.explanation}
        date={nasaData.date}
        img={nasaData.url}
      />
    </div>
  );
}

export default NasaData;
