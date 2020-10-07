import React, { useState, useEffect } from "react";
import "./App.css";


import {API_KEY, BASE_URL} from '../src/constants/index'
import Axios from "axios";

function App() {
  const [nasaImg, setNasaImg] = useState()


  useEffect(() => {
    const fetchImg = () => {
      Axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          setNasaImg(res.data)
        })
        .catch(err => {
          debugger
        })
    }
    fetchImg ()
    
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
