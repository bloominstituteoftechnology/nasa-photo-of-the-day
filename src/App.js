import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [spaceData, setSpaceData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZagyIDXasA0tIVvA18qfaacgivxsjIulC7q1QtTf`)
    .then (res => {
      setSpaceData(res.data);
    })
  }, [])

  return (
    <div className="App">
      <div className="App-header">
      <h1>The NASA Astronomy Photo Of The Day</h1>
        </div>
        <h1>{spaceData.title}</h1>
        <h4>{spaceData.explanation}</h4>
        <img className="App-picture" src={spaceData.hdurl} alt="the bubble nebula"/>
        <div>
          <p>Made courtesy of the NASA APOD API, link to it can be found <a href = "https://api.nasa.gov/#apod" target="_blank" rel='noreferrer'>here.</a></p>
        </div>
    </div>
  );
}

export default App;
