import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL } from "./constants";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    axios.get(BASE_URL)
    .then(({data}) => setPhoto(data))
    .catch(err => console.log('Error getting data: ', err))
  }, [photo])

  return (
    <div className="Container">
        <h1><span role="img" aria-label='go!'>🚀</span> Nasa Photo of the Day! <span role="img" aria-label='go!'>🚀</span></h1>
        <img src={photo.hdurl} alt="Today"></img>
      <div className="info">
        <h3>{photo.date}</h3>
        <h2>{photo.title}</h2>
      </div>
        <p>{photo.explanation}</p>
    </div>
  );
}

export default App;
