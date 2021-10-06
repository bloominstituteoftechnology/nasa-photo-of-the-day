import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';

function App() {

  const [nasaData, setNasaData] = useState([]);
  const [photo, setPhoto] = useState('URL');

useEffect (() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      const setNasaData = [res.data];
      console.log(setNasaData);
      return nasaData;
    })
    .catch(err => {
      console.error(err)
    })
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
