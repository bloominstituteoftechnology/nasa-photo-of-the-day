import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=HNNHuGBqSW7LisA8zWx06wMMUvfrwJZYIVhCLlxk')
      .then(({photo}) => setPhoto(photo))
      .catch(err => console.log(err))
  }, [])
  
  

  return (
    <div className="App">
      <h1>Photo of the Day</h1>
      <img src={photo.url} alt="Nasa All Day!"/>
      <p>{photo.title}</p>
      <p>{photo.date}</p>
      <p>{photo.explanation}</p>
      <h4>Tamara Taylor</h4>
    </div>
  );
}

export default App;
