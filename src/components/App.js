//Importing React and Hooks
import React, { useState, useEffect } from "react";
//Importing the necesary to fetch the NASA API
import axios from 'axios'
//NASA API
import { BASE_URL, API_KEY } from '../constants'

//CSS Styles
import "../App.css";

function App() {

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log('Ups!')
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
