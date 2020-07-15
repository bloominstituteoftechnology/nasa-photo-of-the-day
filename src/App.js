import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photo from './Photo'

function App() {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then( res => {
      console.log("works")
      setPhoto(res.data)
    })
    .catch(() => {
      console.log("Failure to launch")
    })
  }, [])
  
  return (
    <div className="App">
      <div className ="photo-container"> 
      <Photo
        key = {photo.date} 
        photo = {photo} 
        />
      </div>
    </div>
  );
}

export default App;
