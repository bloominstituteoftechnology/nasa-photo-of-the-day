import React, { useState, useEffect } from "react";
import moment from 'moment'
import axios from "axios";
import "./App.css";

import Image from "./Components/Image";
import Video from "./Components/Video";

function App() {
  const [apodData, setApodData] = useState({});
  const [date , setDate] = useState(moment(new Date()).format("YYYY-MM-DD"))

  console.log(date);

  function getApodData(date) {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=cPnxYU2eBFaVE84dw9qlg6kWLIjYaVwMOSeSbIbK"
      )
      .then((response) => {
        console.log(response.data)
        setApodData(response.data);
      });
  }

  useEffect(() => {
    getApodData()
  }, []);

  function changeDateBackwards(date) {
    // Based on current date go back one day
  }

  function changeDateForwards(date){
    // Based on current date go fowards one day
  }

  return (
    <div className="App">
      <div className="header-container">
        <div className="header-left">
          <img id="header-logo" src="NASA.png" alt="NASA Logo" />
          <h1>
            {" "}
            Picture of <br /> The Day
          </h1>
        </div>
        <div className="header-right">
          <h1>Gallery</h1>
        </div>
      </div>

      <div className="media-container">
        {apodData.media_type === "photo" ? (
          <Image data={apodData} />
        ) : (
          <Video data={apodData} />
        )}
      </div>
    </div>
  );
}

export default App;
