import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaCard from './NasaCard';
import "./App.css";


function App() {

  const [nasaData, setNasaData] = useState([]);



  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=bl2i4YuAxFAXOtRfwSKFb51sZbv5o3Xqy6KfMYVJ`)
    .then(res => setNasaData(res.data))
    .catch(() => console.log("No data showing"))
  },[nasaData.url, nasaData.date])
 
  console.log(nasaData)

  return (
    <div className="App">
         <NasaCard data={nasaData}/>
    </div>
  );
}

export default App;

