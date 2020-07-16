import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photo from './Photo'
import Header from './Header'

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
      <div className="get-date">
      <form>
        <label>
          Get photo by date:  
          <input type="date"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
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
