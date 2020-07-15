import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photo from './Photo'

function App() {
  const [photo, setPhoto] = useState("")

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then( res => {
      console.log("works")
      console.log(res.data.title)
    })
    .catch(() => {
      console.log("Failure to launch")
    })
  }, [])
  
  return (
    <div className="App">
      <div></div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
