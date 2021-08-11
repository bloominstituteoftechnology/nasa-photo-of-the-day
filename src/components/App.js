import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/index';
import "../App.css";
import Photo from './Photo';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res)
        setData(res)
      })
      .catch(err => {
        setError(`We're experiencing technical difficulties, please try again...`)
      })
  }, [])


  return (
    <div className="App">
      { error && <h1>{error}</h1> }
      <Photo />
    </div>
  );
}

export default App;
