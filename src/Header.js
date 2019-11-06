import React, { useState, useEffect } from "react";
import axios from "axios";

function Header() {
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
    <div className="App-header">
      <img className="App-logo" src={photo} alt="Logo"></img>
      <h1>NASA Photo of The Day</h1>
    </div>
  );
}

export default Header;
