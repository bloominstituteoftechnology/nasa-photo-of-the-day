import React, { useState, useEffect } from "react";
import axios from "axios";

const NasaPhoto = () => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=BlKfNUq6178Ew2hy61YNqaYn28gghfdVeLCfDBBS"
      )
      .then((res) => {
        console.log(res);
        setPhoto(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <span>
      {photo.map((data) => (
        <img alt="Nasa Photo Of the Day">{data.url}</img>
      ))}
    </span>
  );
};

export default NasaPhoto;
