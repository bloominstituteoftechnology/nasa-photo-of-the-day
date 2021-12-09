import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Picture from './Componets/Picture.js';
import Card from './Componets/Card.js';

function App() {

  const[picOfTheDay, setPicOfTheDay] = useState({})
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(resp => {
      setPicOfTheDay(resp.data);
    })
    .catch(error => {
      console.error(error);
    })
  }, [])

  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
        <Card picture={picOfTheDay}/>
      </p>
    </div>
  );
}

export default App;
