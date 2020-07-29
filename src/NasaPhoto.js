import React, { useState, useEffect } from "react";
import axios from "axios";

const NasaPhoto = () => {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?date=2020-07-28&api_key=vlPg1efoBqyPSujeb1VCyEhppMl25fWl5tovOCUo"
      )
      .then((nasaData) => {
        setApod(nasaData.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  console.log("Success!", apod);
  return (
    <div className="photo">
      <img
        className="dailyPhoto"
        src={apod.url}
        alt="Astronomy Picture of the Day"
      />
      <p>Just checking</p>
    </div>
  );
};

export default NasaPhoto;
