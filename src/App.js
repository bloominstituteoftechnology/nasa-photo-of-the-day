import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';



const StyledDetails = styled.div`
background-color: ${pr => pr.theme.primaryColor};
text-align: center; 
  color: white;
  text-decoration: none;
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
`



function App() {
  const [spaceData, setSpaceData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZagyIDXasA0tIVvA18qfaacgivxsjIulC7q1QtTf`)
    .then (res => {
      setSpaceData(res.data);
    })
  }, [])

  return (
    <StyledDetails >
      <header className="App-header">
      <h1>The NASA Astronomy Photo Of The Day</h1>
      </header>
        <h1>{spaceData.title}</h1>
        <h4>{spaceData.explanation}</h4>
        <img src={spaceData.hdurl} alt="the bubble nebula"/>
        <div>
          <p>Made courtesy of the NASA APOD API, link to it can be found <a href = "https://api.nasa.gov/#apod" target="_blank" rel='noreferrer'>here.</a></p>
        </div>
    </StyledDetails>
  );
}

export default App;
