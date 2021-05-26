import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

import DateDisplay from './Components/DateDisplay'
import Explanation from './Components/Explanation'
import NasaImage from './Components/NasaImage'

function App() {  

  const [nasaData, setNasaData] = useState({})
  // const [query, setQuery] = useState("react")

  useEffect(() => {

    const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key='
    const myApiKey = '36Ay75GJu8qDILEhICjcDR1t8JbXKdwe9YW1Yf3m'
    const fullUrl = `${baseUrl}${myApiKey}`
    
    axios
      .get(fullUrl)
      .then((response) => {
        setNasaData(response.data)
        console.log(response.data)
        // console.log(nasaData)
      })
      .catch(err => {
        console.log(err)
      })

    // console.log(nasaData)
  },[])

  return (
    <div className="App">
      <div className="container">
        <div className="nasaBox">
          <div className="nasaInfo">
            <h1>
              NASA ASTRONOMY PHOTO OF THE DAY
            </h1>
            <DateDisplay date={nasaData.date} />
            <Explanation nasaExplanation={nasaData.explanation} nasaImageTitle={nasaData.title}/>
            </div>
            <NasaImage nasaPhotoUrl={nasaData.url} nasaPhotoTitle={nasaData.title}/>         
        </div>
      </div>
    </div>
  );
}

export default App;
