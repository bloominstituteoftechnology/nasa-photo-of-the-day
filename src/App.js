import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

const apiURL ='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

function App() {
  
  
  axios.get(apiURL)
  .then(res =>{
    let getPic = res.data.url;
  })
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <p>The pic of the day is: 
        <img src={getPic} alt=""></img>
        </p>

    </div>
  );
}

export default App;
