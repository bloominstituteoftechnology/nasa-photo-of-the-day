import React, { useState, useEffect }  from "react";
import axios from 'axios';
import "./App.css";
import ImageWrapper from './imageWrapper/ImageWrapper'
import ExplanationCard from './explanationCard/ExplanationCard' 
const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'LJkEgFGXcCCh1veJkkPTpi6Vgaj1ENGWBi6e8nl7'




function App() {
  const [data, setData] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

useEffect(()=>{
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
.then(response => {
  if (response && response.data) {
    setData(response.data)
  }
}).catch(err =>{console.log(err);})
},[])

useEffect(() => {
  if (data) {
    setIsLoaded(true)
  }
}, [data])





  return (
    isLoaded ?
    <div className='main'>
      <ImageWrapper data={data}/>
      <ExplanationCard data={data}/>
    </div> : ''
  );
}

export default App;
