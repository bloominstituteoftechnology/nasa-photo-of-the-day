import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './data'
import axios from 'axios'
import Image from './image'
import About from './about'
import Footer from './footer'

function App() {

  const [nasaInfo, setNasaInfo] = useState([])
  const [date, setDate] =useState(null)
 

  useEffect(() => { 
    const fetchNasaInfo = () => {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
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

    <Image date={date}  />
    <About date={date} />
    <Footer date={date} />
    </div>
  );
}

export default App;
