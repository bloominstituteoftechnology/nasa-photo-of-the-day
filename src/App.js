import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "./App.css";

import Image from "./Components/Image";
import Video from "./Components/Video";

function App() {
  const [apodData, setApodData] = useState({});
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [error, setError] = useState('')

  function getApodData() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=cPnxYU2eBFaVE84dw9qlg6kWLIjYaVwMOSeSbIbK&date=${date}`
      )
      .then((response) => {
        console.log(response.data);
        setApodData(response.data);
      });
  }

  useEffect(() => {
    getApodData();
  // eslint-disable-next-line
  }, [date]);

  function changeDateBackwards() {
    setError('')
    setDate(moment(date).subtract(1, "days").format("YYYY-MM-DD"));
  }

  function changeDateForwards() {
    date !== moment(new Date()).format("YYYY-MM-DD") ? setDate(moment(date).add(1, "days").format("YYYY-MM-DD")) : setError(`There is no pictures yet for the following day!`);
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

      { error ? (<h1>{error}</h1>) : (<></>)}
      <div className="media-container">
        {apodData.media_type === "image" ? (
          <Image data={apodData} />
        ) : (
          <Video data={apodData} />
        )}

        <div className="button-container">
          <button className="button" onClick={() => changeDateBackwards()}>
            {" "}
            Go Back
          </button>
          <button className="button" onClick={() => changeDateForwards()}>
            {" "}
            Go Ahead
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
