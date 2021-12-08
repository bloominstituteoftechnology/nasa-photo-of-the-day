import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './Photo';



function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      // console.log(res.data)
      setNasaData(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">
      <p>
        {nasaData && <Photo data = {nasaData} /> }
      </p>
    </div>
  );
}

export default App;