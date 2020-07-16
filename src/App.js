import React, {  useState, useEffect  } from "react";
import "./App.css";
import axios from 'axios'
import Title from './components/Title'
import Description from './components/Description'
import Image from './components/Image'
import styled from 'styled-components'



function App() {
  const [nasa, setNasa] = useState([])
  const apiKey = 'fFAKCGUo7Gwl0xWe4eWvr8PH9DwtX7Oxbh48Hh2W'
  

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then((result) => {
      console.log(result.date)
      setNasa(result.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <Title date={nasa && nasa.date} title={nasa && nasa.title} />
      {/* <h1> {nasa && nasa.title} </h1> */}
      {/* <h1> {nasa && nasa.date} </h1> */}
      <Image url={nasa && nasa.url} />
      {/* <img src={nasa && nasa.url} alt={'Nasa Visual of the Day'}/> */}
      <Description explanation={nasa && nasa.explanation} copy={nasa && nasa.copy} />
      {/* <p> {nasa && nasa.explanation} </p>
      <span> {nasa && nasa.copyright} </span> */}
    </div>
  );
}

export default App;
