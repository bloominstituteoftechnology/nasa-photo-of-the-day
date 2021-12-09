import React, { useState, useEffect } from "react";
import "../App.css";
import { BASE_URL, API_KEY} from './data'
import axios from 'axios'

import Intro from './intro'
import Image from './image'
import About from './about'
import Footer from './footer'


function App() {

  const [todaysImage, setTodaysImage] = useState('')
  const [title, setTitle] = useState('')
  const [about, setAbout] = useState('')
  const [copyright, setCopyright] = useState('')



   useEffect(() => { 
    const fetchNasaInfo = () => {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
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
  }, [])



  return (
    <div className="App">
      <Intro title={title} />
      <Image todaysImage={todaysImage} />
      <About about={about} />
      <Footer copyright={copyright} />
    </div>
  );
}

export default App;


// ${DATE_DATA}${chooseDate}