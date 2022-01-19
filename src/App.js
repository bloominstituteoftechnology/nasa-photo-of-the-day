import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {

useEffect(() => {
  const getPhoto = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=cE5KTLhSAfLJAkBh1kW9Uo748DteCGEStGfvJSmU')
    .then(resp => {
      console.log(resp.data)
    })
    .catch(err => {
      console.error(err)
    })
  }
  getPhoto()
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
