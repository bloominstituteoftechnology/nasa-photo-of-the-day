import React,  { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import {API_KEY, BASE_URL } from "./API/api";
import Front from "./docs/front";

function App() {
  const [image, setImage] = useState()
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [explanation, setExplanation] = useState()

  useEffect(() => {

    axios.get(`${BASE_URL}api_key=${API_KEY}`)

        .then((item) => {
          console.log(item.data.url)
          setImage(item.data.url)
          setTitle(item.data.title)
          setDate(item.data.date)
          setExplanation(item.data.explanation)
        })
        .catch(error => {
          console.log("my error", error)
        })
  }, []) 

  return (
    <div className="App">
      <Front image={image} title={title} date={date} explanation={explanation}/>
    </div>
  );
}

export default App;