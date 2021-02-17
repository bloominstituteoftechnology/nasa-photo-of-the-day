import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import PicOfTheDay from './components/PicOfTheDay'
import Title from './components/Title'
import CoolInfo from './components/CoolInfo'
import styled from 'styled-components'
import nasaImg from './components/images/NASA-logo.jpg'
import background from './components/images/3wPVPxQ-spacecom-wallpaper.jpg'

const MainWrapper = styled.div`
    font-family: 'Space Grotesk', sans-serif;
  /* font-size: 3rem; */
  text-align: center;
  color:white;
  background-image: url(${background});
`

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
      console.log(`How are you gonna call yourself a programmer and ${err} happens`)
    })
  },[])

  // const Wrapper = styled.div`
  //   background-color: skyblue;
  // `

  


  return (

    <MainWrapper className="App">      
    
      <PicOfTheDay img={nasaImg}/>
      <Title title={nasaTitle} date={nasaDate} />
      <CoolInfo mediaType={nasaMedia} URL={nasaURL} expl={nasaExplanation} title={nasaTitle} />
    
    </MainWrapper>

  );
}

export default App;
