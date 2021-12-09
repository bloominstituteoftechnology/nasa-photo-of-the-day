import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaPhoto from "./nasa";
import Explanation  from "./Explanation";
// import { API_URL, API_Key } from "./Constants";
import "./App.css";
import Copyright from "./copyright"

export default App;

function App() {
  const [nasaData, setNasaData] = useState([]);

useEffect(() => {
  
  axios.get('https://api.nasa.gov/planetary/apod?api_key=jWaCWGvDdPdY2207ALzpXNfw5arVUICq624WiDDR')
  .then(res => {
    // console.log(res.data);
    setNasaData(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
}, []);

return (
  <div className="App">

  <h1>Astronomy Picture Of the Day</h1>
  <NasaPhoto nasaData={nasaData}/>
  <Explanation explanation={nasaData.explanation} />
  <Copyright right={nasaData.copyright} />
  </div>
);
}
