import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Img from './img'
import Explain from './Explain'
import Extra from './Extra'


function App() {

  const [nasa, setNasa] = useState([])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=VxmyeETx5uJSltRR3PiVxvyyOu4P0DfNlLkbupmJ`)
    .then(res => {
      setNasa(res.data)
    })
    .catch(error => {
      console.error(error)
    })
  },[])
  console.log(nasa)


  return (
    <div className="App">
      <h1>Nasa image of the day</h1>
      <Extra nasaExtra = {nasa}/>
      <Img nasaImg = {nasa}/>
      <Explain nasaInfo = {nasa}/>
    </div>
  );
}

export default App;
