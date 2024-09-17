import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
const BASE_URL = ('https://api.nasa.gov/planetary/apod');
const API_KEY = ('dvcz5lK4r0MvsoARAp7YadQBvxBDWj9kPxSADKtU');


function App() {
const[photoOfTheDay, setPhotoOfTheDay] = useState()
  const fetchPhoto =() =>{
    axios
    .get(`${BASE_URL}?api_key=${API_KEY}&date=2020-12-08`)
    .then((res) => {

console.log(res.data)
    })
  }
useEffect(() => {
fetchPhoto()
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
