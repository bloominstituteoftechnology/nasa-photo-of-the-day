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
      <h1>Nasa's Photo of the Day!</h1>
      <p>
        Here we like to showcase one photo a day from the stars! <br>Click below if you like what you see.</br>
        <button onClick={(event) => nasaData(id)}>switch it up</button>
         <span role="img" aria-label='go!'>🚀</span>!
      </p>

      <Photo 
      photo={nasaData}
      />

    </div>
  );
}

export default App;
