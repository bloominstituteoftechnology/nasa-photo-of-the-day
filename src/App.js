import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Body from './Components/body';



function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      console.log(res.data)
      setNasaData(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">
        <Body nasaAPI = {nasaData} />
    </div>
  );
}

export default App;
