import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import PhotoCard from './PhotoCard'
import Hero from './Hero'


function App() {

  const [nasaPhoto, setNasaPhoto] = useState({})

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1996-11-01')
    .then(res => {
      console.log(res.data)
      setNasaPhoto(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Hero />
      <PhotoCard text={nasaPhoto.explanation} title={nasaPhoto.title} img={nasaPhoto.url}/>
    </div>
  );
}

export default App;

