import React, { useState, useEffect } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar"
import Display from "./components/Display/Display"
import axios from "axios";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index";

function App() {

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => console.log(res))
      .catch(error => console.log(error))
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
