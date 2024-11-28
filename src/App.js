import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';



const StyledDetails = styled.div`
background-color: ${pr => pr.theme.primaryColor};
text-align: center; 
  color: white;
  padding: 1%;
  img {
    height:100vmin;
  }
  header {
    background-color: ${pr => pr.theme.headerColor};
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  a {
    color: gray;
    text-decoration: none;
  }
`

function App() {
  const [spaceData, setSpaceData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZagyIDXasA0tIVvA18qfaacgivxsjIulC7q1QtTf`)
    .then (res => {
      setSpaceData(res.data);
    })
  }, [])
  
  const [asteroidData, setAsteroidData] =useState([]);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?startDate=2022-01-01&endDate=2022-12-31&api_key=ZagyIDXasA0tIVvA18qfaacgivxsjIulC7q1QtTf`)
    .then (res => {
      setAsteroidData(res.data.near_earth_objects);
    })
  }, [])
 console.log(asteroidData);
  return (
    <StyledDetails >
      <header className="App-header">
      <h1>The NASA Astronomy Photo Of The Day</h1>
      <h2>Want to see where all the Coronal Mass Ejections are? Click <a href="#asteroids">here.</a></h2>
      </header>
        <h1>{spaceData.title}</h1>
        <h4>{spaceData.explanation}</h4>
        <img src={spaceData.hdurl} alt="the bubble nebula"/>
        <header id='asteroids'>
          <h1>Asteroids Near Earth</h1>
          <p>Coming soon!</p>
        </header>
        <div>
          <p>Made courtesy of the NASA API, link to it can be found <a href = "https://api.nasa.gov/" target="_blank" rel='noreferrer'>here.</a></p>
        </div>
    </StyledDetails>
  );
}

export default App;
