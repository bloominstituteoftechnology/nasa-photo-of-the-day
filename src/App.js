import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=N8TjJsyaQZV1KcUqWt74gj6Cajc3t1vXhp8vLWkk"
      )
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }, []);

  return (
    <div className="App">
      <section className="title-apod-container">
        <div className="title-container">
          <div className="title-box">
            <h1 className="title">Astronomy Photo Of The Day</h1>
          </div>
        </div>
        <div className="image-container">
          // insert dynamic image into image tag
          <div className="image-box">
            <img src="" className="apod-image" />
          </div>
          <div className="apod-description">
            // insert dynamic title from data object
            <p className="apod-description-title">{}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
