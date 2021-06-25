import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

function App() {

  const [picture, setPicture] = useState([])
  const [mainData, setMainData] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then((res) => setPicture(res.data.url))
    .catch(err => console.log('Error getting friends: ', err))
  }, [])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then((res) => setMainData(res.data))
    .catch(err => console.log('Error getting friends: ', err))
  }, [])

  return (
    <div className="App">
      <p>
        <h1>Nasa Update Page!</h1>
        <h2>{mainData.date}</h2>
        <span role="img" aria-label='go!'>🚀</span>
        <iframe width="800" height="550" src={picture}></iframe>
        <h3>{mainData.title}</h3>
        <p>{mainData.explanation}</p>
      </p>
    </div>
  );
}

export default App;
