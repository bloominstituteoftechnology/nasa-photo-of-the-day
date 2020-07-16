import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photo from './Photo'
import Header from './Header'
import DateForm from './DateForm'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [photo, setPhoto] = useState([])
  const [date, setDate] = useState("")



  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
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
      <Header/>
      <DateForm/>
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
