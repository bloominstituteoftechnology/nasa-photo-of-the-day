import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY} from './data'
import axios from 'axios'
import Image from './image'


function App() {

  const [nasaInfo, setNasaInfo] = useState('')


 
   useEffect(() => { 
    const fetchNasaInfo = () => {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res => {

        setNasaInfo(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchNasaInfo()
  }, [])






  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

    <Image nasaInfo={nasaInfo}  />
    </div>
  );
}

export default App;
