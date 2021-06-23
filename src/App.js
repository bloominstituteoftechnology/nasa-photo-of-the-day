import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, api_key } from './nasa'
import AboutInfo from "./aboutInfo";
import Buttons from "./cta-login";

function App() {
  const [nasaData, setNasaData] = useState([])
  const picOfTheDay = nasaData.url
  
//api call
  useEffect(() => {
    axios.get(`${BASE_URL}${api_key}&date=2012-03-14`)
    .then(({data}) => setNasaData(data))
    .catch(err => console.log('Error getting photo of the day: ', err))
  }, [])

  return (
    <div className="App">
      <h1><span role="img" aria-label="stars emoji">✨</span> Welcome Stargazer <span role="img" aria-label="rocket emoji">🚀</span></h1>
      <p className='subtitle'>NASA photo of the day</p>
      <img src={picOfTheDay} alt="NASA pic of the day"></img>
        {<AboutInfo />}
        {<Buttons />}
    </div>
  );
}

export default App;

