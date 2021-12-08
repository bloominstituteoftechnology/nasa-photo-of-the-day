import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './data'
import axios from 'axios'

function App() {

  const [todaysImage, setTodaysImage] = useState([])
  const [currentDate, setCurrentDate] = useState(null)



  useEffect(() => { 
    const fetchImage = () => {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setTodaysImage(res.data.url)
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchImage()
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
