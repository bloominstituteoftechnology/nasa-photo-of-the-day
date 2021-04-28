import React, { useState, useEffect } from 'react'
import "./App.css";
import axios from 'axios';
import Media from './components/Media/Media'

function App() {

  const [apod, setApod] = useState({})

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then(response => {
            console.log(response)
            setApod(response.data)
          })
          .catch(error => console.error("failed to get profile info:", error))
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1 className="pageTitle"> NASA Picture of the Day</h1>
        <Media pod={apod} />
        <h3 className="mediaTitle">{apod.title}</h3>
        <p className="date">{apod.date}</p>
        <p className="explanation">{apod.explanation}</p>
      </div>
    </div>
  );
}

export default App;
