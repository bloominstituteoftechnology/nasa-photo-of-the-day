import React, { useState, useEffect } from "react";
import axios from "axios";

function Photo() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setPhoto(response.data.url);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The photo was not returned.");
      });
  }, []);
  return (
    <div>
      <img
        className="Main-photo"
        src={photo}
        alt="NASA Space Shot of the Day"
      ></img>
    </div>
  );
}

export default Photo;
