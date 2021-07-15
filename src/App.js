import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Title from './components/Title'
import  VideoPlayer  from "react-video-js-player";


function App() {
const[title, setTitle] = useState([])
const[date,setDate] = useState([])
const[explanation,setExplanation] = useState([])
const[img, setImg] = useState("")

  const takeNewData = () =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=WscU2prYd7VBNSf7t33LfWOLSQscDvTlHrHcSoVB
    `)
    .then((res) =>{
      console.log(res.data)
      setTitle(res.data.title)
      setDate(res.data.date)
      setExplanation(res.data.explanation)
      setImg(res.data.url)


    })
    .then(() =>{
      console.log(title)
      console.log(date)
      console.log(img)


    })
    .catch(err => console.log(err))
  }
  useEffect(() => {
   takeNewData()
  }, [])

  return (
    <div className="App">
      <Title title={title} date={date} src={img} explanation={explanation} />
        
    </div>
  );
}

export default App;
