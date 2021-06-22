import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

function App() {
  const [photo, setPhoto] = useState()
  const [date, setDate] = useState()
  const [data, setData] = useState()
  const [title, setTitle] = useState()
  const [info, setinfo] = useState()
 


  // the API call
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(({data}) => setPhoto(data))
    .catch(err => console.log('Error getting picture of the day, API limit? ', err))
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
