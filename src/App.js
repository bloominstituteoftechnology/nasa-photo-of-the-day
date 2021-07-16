import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Title from './components/Title'
import  VideoPlayer  from "react-video-js-player";

function App() {
const[title, setTitle] = useState([])
const[date,setDate] = useState([])
const[explanation,setExplanation] = useState([])
const[mediaUrl, setMediaUrl] = useState([])
const[mediaType, setMediaType] = useState([])


const handleInput = event =>{
  takeNewData(event.target.value)
} 
function getUrlForDate(date) {
  return `https://api.nasa.gov/planetary/apod?api_key=WscU2prYd7VBNSf7t33LfWOLSQscDvTlHrHcSoVB&date=${date}`
}

  const takeNewData = (date) =>{
    const url= getUrlForDate(date)
    console.log(url)
    axios.get(url)
    .then((res) =>{
      console.log(res.data)
      setTitle(res.data.title)
      setDate(res.data.date)
      setExplanation(res.data.explanation)
      setMediaUrl(res.data.url)
      setMediaType(res.data.media_type)
      

    })
    .then(() =>{
      console.log(title)
      console.log(date)
      console.log(mediaUrl)
      console.log(mediaType)



    })
    .catch(err => console.log(err))
  }
  useEffect(() => {
   takeNewData("2021-07-15")
  }, [])

  return (
    <div className="App">
      <input onChange={handleInput} 
      type="date"
      placeholder="yyyy-mm-dd"
    />
      <Title title={title} date={date} explanation={explanation} url={mediaUrl} media={mediaType}/>
        
    </div>
  );
}

export default App;
