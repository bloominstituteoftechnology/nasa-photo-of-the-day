import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import styled, { keyframes } from 'styled-components';
import Nasa from './nasa';

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }`

const StyledApp = styled.div`
  display: flex;
  background-color: royalblue;
  border: 2px solid pink;
  color: darkred;
 
  h1 {
    width: 80;
    justify-content: center;
    background-color: pink;
    border: 2px solid crimson;
  }

  p {
    color: black;
  }

  img {
    border-radius: 10px;
  }

  transform: scale(2); // start of animation
  opacity: 0; // start of animation;
  animation: ${kf} 3s ease-in-out forwards;
`


function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=jWaCWGvDdPdY2207ALzpXNfw5arVUICq624WiDDR`)
      .then(res => {
        setNasaData(res.data);
      }).catch(err => console.error(err))
  }, [])
  return (
    <StyledApp className="App">
      {nasaData && <Nasa nasaData={nasaData} /> }
    </StyledApp>
  );
}

export default App;



