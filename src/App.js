import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { BASE_URL, API_KEY } from './constants/index'
import Title from './Title'
import Image from './Image'
import Copyright from './Copyright'
import Date from './Date'
import Explanation from './Explanation'

function App() {
  const [nasaData, setNasaData] = useState({})


  useEffect(() => {
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
      .then(res => {
        setNasaData(res.data)
      })
  }, [])


  return (
    <div className="App">
      <Title className="title" title={nasaData.title}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Image className="image" url={nasaData.url}/>
      <Copyright className="copyright" copyright={nasaData.copyright}/>
      <Date className="date" date={nasaData.date}/>
      <Explanation className="explanation" explanation={nasaData.explanation}/>

    </div>
  );
}

export default App;
