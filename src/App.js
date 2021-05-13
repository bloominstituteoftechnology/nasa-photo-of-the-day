import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Title from './Components/Title'
import NasaMedia from './Components/NasaMedia'
import NasaInfo from './Components/NasaInfo'

function App() {

  const [nasaMediaType, setNasaMediaType] = useState()
  const [nasaImg, setNasaImg] = useState()
  const [nasaTitle, setNasaTitle] = useState()
  const [nasaURL, setNasaURL] = useState()
  const [credit, setCredit] = useState()
  const [nasaDate, setNasaDate] = useState()
  const [explanation, setExplanation] = useState()




  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=8DzApwJb2t9VBex2dKLyY7FqiPVYR8ImjjanFyVy")
    .then(res => {
      console.log(res.data)
      setNasaMediaType(res.data.media_type)
      setNasaImg(res.data.hdurl)
      setNasaDate(res.data.date)
      setNasaTitle(res.data.title)
      setNasaURL(res.data.url)
      setCredit(res.data.copyright)
      setExplanation(res.data.explanation)

    })
    .catch(err => {
      console.log(err)
    })
  },[])


  return (
    <div className="App">
      <Title />
      <NasaMedia mediaType={nasaMediaType} nasaImg={nasaImg}/>
      <NasaInfo date={nasaDate} explanation={explanation} mediaType={nasaMediaType}  title={nasaTitle}/>
    </div>
  );
}

export default App;
