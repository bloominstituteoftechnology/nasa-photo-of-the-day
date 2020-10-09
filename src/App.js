import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import PictureContainer from './components/MediaContainer/PictureContainer'
import PageHeader from './components/Header'
import styled from 'styled-components'

// const StyledApp = styled.div`
//   border: 10px solid black;
// `

function App() {
  
  const [nasaData, setNasaData] = useState({})//Whats in the parentheses initiates the initial state which = photoObject

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=x7gQ7F2G3Zqw8QTI9248JKa1UkGIiyD9q5cX4mj0&date=2020-03-05')
      .then(res => {
        console.log(res)
        setNasaData(res.data) //dot notation to trace the path of an object
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
// the first photoObject comes from picturecontainer.jsx
  return (
    <div className="App">
      <PageHeader headerData={nasaData}/>
      <PictureContainer photoData={nasaData}/>
    </div>
  );
}

export default App;
