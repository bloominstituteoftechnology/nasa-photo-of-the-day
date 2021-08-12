import axios from 'axios';
import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './api';
import Photo from './components/Photo';
import Explanantion from './components/Explanation';
import Copyright from './components/Copyright';
import Date from './components/Date';

function App() {

  const [nasaInfo, setNasaInfo] = useState ([])
  
  useEffect (() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(res => {
    console.log(res.data);
    setNasaInfo(res.data);
  })
}, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <Copyright title={nasaInfo.title} />
        <Date date={nasaInfo.date} />
        <Photo image={nasaInfo.url} />
        <Explanantion explanantion={nasaInfo.explanantion} />
      </p>
    </div>
  );
}

export default App;
