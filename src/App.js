import React from "react";
import {useState, useEffect} from 'react';
import "./App.css";
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = () => {
      axios 
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          .then (res => {
            console.log(res)
            setData(res.data)
          })
          .catch(err => {
            console.log(err)
          })

    }
    getData()
  },[])
  return (
    <div className="App">
      <h1>Photo of the Day: Presented by NASA</h1>
      <img src = {data.url} alt = 'Nasa photo of the day, it is probably space'/>
      <h3>{data.title}</h3>
      <p>{data.date}</p>
      <p>{data.explanation}</p>
      <h4>Created by Mallory Hall</h4>
    </div>
  );
}

export default App;
