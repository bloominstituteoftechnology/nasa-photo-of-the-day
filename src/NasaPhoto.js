import React, { useState, useEffect } from "react";
import axios from "axios";

const NasaPhoto = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=vlPg1efoBqyPSujeb1VCyEhppMl25fWl5tovOCUo")
      .then((response) => console.log('response', response))
      .catch((error) => console.log('error', error));
  });

  return (
    <div className="photo">
      <img
        className="dailyPhoto"
        src={photo}
        alt="Astronomy Picture of the Day"
      />
      <p>Just checking</p>
    </div>
  );
};

export default NasaPhoto;
