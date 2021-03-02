import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL } from './constants/constants.js'
import image from './assets/grapefruit-slice-332-332.jpg'

function App() {
  const [image, setImage] = useState();
  const [explain, setExplain] = useState();
  const [date, setDate] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(({ data }) => {
      console.log(data)
      setImage(data.url)
      setExplain(data.explanation)
      setTitle(data.title)
      setDate(data.date)
    });
  }, []);
  return (
    <div className="App">
    <img src={ image } />
    <h2>{ title }</h2>
    <p>{ date }</p>
    <p>{ explain }</p>
    </div>
  );
}

export default App;
