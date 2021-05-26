import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Title from './Title'
import Photo from './Photo'

function App() {

  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-06-21'
    axios
      .get(nasaUrl)
      .then((response) => {
        setNasaData(response.data)
        console.log('Nasa Photo Data', response)
      })
      .catch((error) => {
        console.log('No Nasa Photo Data')
      })
  }, [])

  return (
    <div className="App">
      <Title />
      <Photo
        key={nasaData.id}
        date={nasaData.date}
        url={nasaData.url}
        explanation={nasaData.explanation}
        copyright={nasaData.copyright}
      />
    </div>
  );
}

export default App;
