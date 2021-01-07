import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaCard from './NasaCard';
import "./App.css";


function App() {

  const [nasaData, setNasaData] = useState([]);



  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=4J1JlA79VniuhWfwEtHe663WQrN9RA2WmxqFPDdR&date=2012-03-14`)
    .then(res => setNasaData(res.data))
    .catch(() => console.log("Opps check your code"))
  },[nasaData.url, nasaData.date])

  console.log(nasaData)

  return (
    <div 
      style ={{
        backgroundColor: 'black'
      }}
      className="App">
         <NasaCard data={nasaData}/>
    </div>
  );
}

export default App;