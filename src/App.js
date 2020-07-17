import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './Header'
import Main from './Main'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [photo, setPhoto] = useState([])
  const [date, setDate] = useState("2020-05-24")



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
      <div>
      <Header/>
      
      <Main
        photo = {photo}
      />
      </div>
      
      
    </div>

  );
}

export default App;
