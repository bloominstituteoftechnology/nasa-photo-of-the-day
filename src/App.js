import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export const BASE_URL = "https://api.nasa.gov/planetary/apod";
export const API_KEY = "qXYnhDSG0waj3uWYCmaxNAhsF5ghT3Wf7o1fHiby";

function App() { 

  const [nasaPOD, setNasaPOD] = useState([]);

  // useEffect
  useEffect(() => {
    const pictureOfTheDay = () => {
      axios.get("https://api.nasa.gov/planetary/apod")
       .then(res => {
         setNasaPOD(res.data);
  
       }).catch(err => {
         console.error(err);
       })
    }

    pictureOfTheDay();
  }, [])

  

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
