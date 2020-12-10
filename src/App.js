import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const [photo, setPhoto] = useState([]);

  const BASE_URL = "https://api.nasa.gov"; 
  const API_KEY = "6of5PdLxZy0xhzasrrOGzAWzkfbX4ujrfSdO6qLD";

  useEffect(()=>{
    const fetchPhoto = () => {
      axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setPhoto(res.data)
      })
      .catch(err => {
        console.log('the error is right before your eyes!')
      })
    } 
    fetchPhoto();
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <iframe src ={photo.url} width="100%" height="300"></iframe>
    </div>
  );

}

export default App;
