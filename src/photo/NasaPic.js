/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

const NasaPic = (props) => {
  const [photo, setPhoto] = useState();

  console.log(props);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=S3qhd2wVOd3lgNCrmxkfcgHACURSoJFOK6K6Pfr4"
      )
      .then((response) => {
        console.log(response);
        setPhoto(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(photo);
  return (
    <div className="container">
      <Photo photo={photo} />
    </div>
  );
};

export default NasaPic;
