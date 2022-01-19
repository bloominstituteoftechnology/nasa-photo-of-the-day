import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=jWaCWGvDdPdY2207ALzpXNfw5arVUICq624WiDDR`)
      .then(res => {
        setNasaData(res.data);
      }).catch(err => console.error(err))
  }, [])
}
export default App;
