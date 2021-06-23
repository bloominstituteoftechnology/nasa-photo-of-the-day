import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

function App() {

  const [picture, setPicture] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(({data}) => setPicture(data))
    .catch(err => console.log('Error getting friends: ', err))
  }, [])

  console.log(picture)

  return (
    <div className="App">
      <p>
        <h2>{picture.date}</h2>
        <span role="img" aria-label='go!'>🚀{picture.hdurl}</span>
        <h3>{picture.title}</h3>
        <p>{picture.explanation}</p>
      </p>
    </div>
  );
}

export default App;
