import React from "react";
import "./App.css";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL } from './Url/baseUrl'
import { API_KEY } from './Url/baseUrl'
import Display from './Components/display'
function App() {
  const [nasaData, setNasaData] = useState({});


  useEffect(() => {
    axios
  .get(`${BASE_URL}?api_key=${API_KEY}`)
  .then((res)=>  {
    setNasaData(res.data)
    // console.log(res.data);
  })
  .catch((err) => console.log(err));
  }, [])
  
  return (
    <div className="App">
      <Display date={nasaData.date} url={nasaData.url} title={nasaData.title} explain={nasaData.explanation}/>
    </div>
  );
}

export default App;
