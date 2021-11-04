import React, { useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import Img from './img'
import Explain from './Explain'
import Extra from './Extra'

function App() {

  const [nasa, setNasa] = useState([])
  useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=vYasWXhZq0LKf8nf7DK0BDHi7VtXFR&date=2012-03-14`)
    .then(res => {
      setNasa(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  
  return (
    <div className="App">
      <h1>Nasa Image of the Year</h1>
      <Extra nasaExtra = {nasa}/>
      <input/><button>reset</button>
      <Img nasaImg = {nasa}/>
      <Explain nasaInfo = {nasa}/>
    </div>
  );
}

export default App;
