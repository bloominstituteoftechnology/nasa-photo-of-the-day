// Import the state and effect hooks 
import React, { useState, useEffect } from "react";

import "./App.css";

// Import the axios lib from node_modules
import axios from 'axios';

function App() {

  // Use an effect that runs after FIRST DOM surgery caused by the first render only.
  // Use `useEffect` from React, which should consist of a call to the API using axios.
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log('res', res);
      }).catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {/* <OverView /> */}
    </div>
  );
}

export default App;
