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
      setNasaData(res.data);
      console.log(nasaData);
      return setNasaData(res.data);
    })
    .catch(err => {
      console.error(err)
    })
  }, [photo])

  return (
    <div className="App">
      <p>
        <img src = {`${nasaData.url}`} alt='space shit'/>
      </p>
    </div>
  );
}

export default App;
