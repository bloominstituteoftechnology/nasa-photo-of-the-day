import React, { useState, useEffect } from "react";
import "./App.css";
import Main from './Main'
import axios from 'axios'



function App() {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('')
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res=>{
      setImage(res.data.url)
      setCaption(res.data.explanation)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  const pStyle = {
    width: '70%',
    border: '1px solid black',
    margin: '0 auto',
    marginBottom: '50px'
  }
  
  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <p style={pStyle}>{caption}</p>
      <Main image={image} />
    </div>
  );
}

export default App;
