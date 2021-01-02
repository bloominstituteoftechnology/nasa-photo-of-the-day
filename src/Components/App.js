import React, { useState, useEffect } from "react";
import Axios from 'axios';
import '../App.css';
import ReactPlayer from 'react-player/youtube'
import Image from './Image';
import Title from './Title';
import Description from './Description'
import NavBar from './NavBar'

export default function App() {
  const [ nasaData, setNasaData ] = useState([]);

  useEffect(() => {
    Axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=BuQMHNKZRhyaH6AXdbck1WN5h8GVUPXEzhUfDLEd`)
    .then((res) => {
      setNasaData(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className='Container'>
      <NavBar />
      <hr></hr>
      <Image src={nasaData.url} title={nasaData.title}/>
      <Title title={nasaData.title}/>
      <Description description={nasaData.explanation}/>
    </div>
  )
}
