import React, { useState, useEffect } from "react";
import "../App.css";
import { BASE_URL, API_KEY, DATE_DATA} from './data'
import axios from 'axios'
import styled from 'styled-components';

import Intro from './intro'
import Image from './image'
import About from './about'
import Footer from './footer'

const StyledApp = styled.div`
    color: ${props => props.theme.accentColor};
    transition: all 0.2s ease-in-out;
    p.date:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
    }
`


function App() {

  const [todaysImage, setTodaysImage] = useState('')
  const [title, setTitle] = useState('')
  const [about, setAbout] = useState('')
  const [copyright, setCopyright] = useState('')
  const [dateValue, setDateValue] = useState('')

  const changeDate = evt => {
    const {value} = evt.target;
    setDateValue(value);
  }


   useEffect(() => { 
    const fetchNasaInfo = () => {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}${DATE_DATA}${dateValue}`)
      .then(res => {
        console.log(res)
        setTodaysImage(res.data.url)
        setTitle(res.data.title)
        setAbout(res.data.explanation)
        setCopyright(res.data.copyright)

               
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchNasaInfo()
  }, [dateValue])





  return (
    <StyledApp className="App">
      <Intro title={title} />
      <p className="date">Select Date: <input type='date' id='dateBox' onChange={changeDate} value={dateValue} /> </p>  
      <Image todaysImage={todaysImage} />
      <About about={about} />
      <Footer copyright={copyright} />
    </StyledApp>
  );
}

export default App;


// ${DATE_DATA}${chooseDate}

// onChange={}
