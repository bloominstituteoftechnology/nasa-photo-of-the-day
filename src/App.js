import React, {useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import styled from 'styled-components'

import { BASE_URL, API_KEY } from './constants '
import AstronomyPicture from './components/AstronomyPicture/AstronomyPicture'
import AstronomyEventDetails from './components/AstronomyEventDetails/AstronomyEventDetails'


function App() {

  const [dailyAstronomyEvent , setdailyAstronomyEvent] = useState({})
 const [ date , setdate] = useState("")

  let newDate = new Date()
  let day = newDate.getDate();
  let month = newDate.getMonth()+ 1;
  let year = newDate.getFullYear();


  useEffect(() => {
    console.log('making an api request!')
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}&date=${year + '-' + month + '-' + day}`)
      .then(response =>  setdailyAstronomyEvent(response.data)
        )
      .catch(err => console.log(err))
  }, [])



  return (
    <Container className="App">
      <h1> Astronomy Picture of the Day </h1>
      <p>
       Discover the cosmos<span role="img" aria-label='go!'>🚀</span>! 
      Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
      </p>
      <p> {year + '-' + month + '-' + day}</p>
      <AstronomyPicture dailyAstronomyEvent = {dailyAstronomyEvent}/>
      <AstronomyEventDetails dailyAstronomyEvent = {dailyAstronomyEvent}/>
    </Container>
  );
}

const Container = styled.div
` background-color: cornsilk
display: flex;
`

export default App;
