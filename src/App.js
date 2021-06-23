import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";

export const BASE_URL = 'https://api.nasa.gov/planetary/apod'
export const API_KEY = 'DEMO_KEY'

function App() {

  const [picOfDay, setPicOfDay] = useState([])

   useEffect(() => {

     const getPicOfDay = () => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res)
        setPicOfDay(res.data)
      })
  
      .catch(err => {
        console.log(err)
      })
  
     }
    getPicOfDay()

  }, [])

  return (
    <div className="App">
          <p>Nasa Photo Of The Day!</p>
          <p>{picOfDay.title}</p>
          <p>{picOfDay.date}</p>
          <p>{picOfDay.explanation}</p>
    </div>
  );
}

export default App;
