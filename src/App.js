import React, { useState, useEffect } from "react";
import "./App.css";
import Main from './Main'
import axios from 'axios'


function App() {
  const [image, setImage] = useState(null)
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res=>{
      setImage(res.data.url)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <Main image={image} />
    </div>
  );
}

export default App;
