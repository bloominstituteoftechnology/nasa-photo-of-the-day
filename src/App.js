import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Components/Header";


function App() {
  const fetchData = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res.data);
     
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(fetchData, []);

  console.log(fetchData);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
