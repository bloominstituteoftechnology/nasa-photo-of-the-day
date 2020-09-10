import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import { API_KEY, BASE_URL } from '../constants/index'

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/nasaData?api_key=${API_KEY}`)
    .then(res => {
      setNasaData(res.data)
      console.log(nasaData);
    })
    .catch(err => {
      debugger
    })
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
