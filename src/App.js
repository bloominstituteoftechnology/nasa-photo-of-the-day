import React, { useState, useEffect } from "react";
import "./App.css";

import axois from 'axios';
import img from './components/img';
import header from './components/header'
import text from './components/text'
import axios from "axios";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    const getPic = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setNasaData(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.error()
      })
    }
    getPic();
  }
  ), [])

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
//started working on the App.js file