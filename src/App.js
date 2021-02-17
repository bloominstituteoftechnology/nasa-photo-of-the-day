import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import PicOfTheDay from './components/PicOfTheDay'
import Title from './components/Title'
import CoolInfo from './components/CoolInfo'
import './index.css'


function App() {

  const [nasaDate, setNasaDate] = useState()
  const [nasaExplanation, setNasaExplanation] = useState()
  const [nasaMedia, setNasaMedia] = useState()
  const [nasaTitle, setNasaTitle] = useState()
  const [nasaURL, setNasaURL] = useState()

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=8DzApwJb2t9VBex2dKLyY7FqiPVYR8ImjjanFyVy")
    .then(res => {
      console.log(`DATA`, res.data)
      setNasaDate(res.data.date)
      setNasaExplanation(res.data.explanation)
      setNasaMedia(res.data.media_type)
      setNasaTitle(res.data.title)
      setNasaURL(res.data.url)
    })
    .catch(err => {
      console.log(`YOU DONE FUCKED UP ${err}`)
    })
  },[])

  // console.log(`NASA Date`, nasaDate)
  // console.log(`Ex`, nasaExplanation)
  // console.log(`Med`, nasaMedia)
  // console.log(`Title`, nasaTitle)
  // console.log(`URL`, nasaURL)
  

  return (
    <div className="App">

      
      <PicOfTheDay />
      <Title title={nasaTitle} date={nasaDate}/>
      <CoolInfo mediaType={nasaMedia} URL={nasaURL} expl={nasaExplanation} title={nasaTitle} />
    </div>

  );
}

export default App;
