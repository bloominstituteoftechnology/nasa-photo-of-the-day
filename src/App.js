import React, { useState, useEffect } from "react";
import axios from 'axios'

import Photo from './components/photo';
import Calendar from './components/calendar';

import "./App.css";

function App() {
  const [ data, setData ] = useState([])

  const fetchData = () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=spKBP8PFum2CMgJT4yaFGza6lW8uJydNBKyk09jr")
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(fetchData, [])

  return (
    <div className="App">
      {/*<Photo {...data} />*/}
      <Calendar />
    </div>
  );
}

export default App;
