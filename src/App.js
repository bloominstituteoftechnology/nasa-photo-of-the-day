import React, { useState, useEffect } from "react";
import "./App.css";
import {API_KEY, BASE_URL} from '../src/constants/index'
import Axios from "axios";
import NasaCard from "./components/NasaCard";
import Data from './components/Data'

function App() {
  const [nasaImg, setNasaImg] = useState()


  useEffect(() => {
    Axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setNasaImg(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])



  return (
    <div className="App">
      <NasaCard nasaInfo={nasaImg} />
      <Data nasaImg={nasaImg} />
        
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      
    </div>
  );
};

export default App;
