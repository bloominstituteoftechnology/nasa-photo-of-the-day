import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import {NASA_URL} from '../src/index'
import  Image  from './components/Image'
import Body from './components/Body'

function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios
      .get(NASA_URL)
      .then((res) => {
        setNasaData(res.data)
      })
      .catch((err) => {
        return err
      })
  }, [])
    
  console.log(nasaData);

  return (
    <div className="App">
      <Image picOfTheDay={nasaData.url} />

    </div>
  )
}

export default App;
