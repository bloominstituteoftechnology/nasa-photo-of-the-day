import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res)
        setPhoto(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const imgSrc = {
    maxHeight: 700,
    maxWidth: 700 
  }

  return (
    <div className="App">
      <h1>NASA: Photo of the Day</h1>
      <p>{photo.title}</p>
      <p>{photo.date}</p>
      <p>{photo.explanation}</p>
      <img src={photo.url} alt="NASA all day!" style={imgSrc}/>
      <br></br>
      <button color="primary" size="lg" block>I Come In Peace!</button>
      <h4>Tamara Taylor</h4>
    </div>
  );
}

export default App;
