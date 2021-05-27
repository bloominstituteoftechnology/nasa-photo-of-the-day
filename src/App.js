import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Info from './components/Info.js'

// Parent
function App() {

  const [apodData, setApodData] = useState({})                                            // match states {} [] '' etc
  console.log(apodData)

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=I7FKEo5cyioKDlwxTjWorNCaEg8P0SWvuZkXMoNN')
      .then(res => {
        setApodData(res.data) 
      })
      .catch(err => {
        console.log('ERR')
      })
  }, [])

  return (
    <div className="App">
      <div>
        <h1>NASA Picture of the Day</h1>
      </div>
      <img src={apodData.url} alt={apodData.title}/>
      
      <Info apodData={apodData}/>
    </div>
  );
}

export default App;









