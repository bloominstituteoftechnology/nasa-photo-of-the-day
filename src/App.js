import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import styled from 'styled-components'

function App() {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res)
      setPhoto(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  const imgSrc = {
    maxHeight: 500,
    maxWidth: 500
  }

  const StyledH1 = styled.h1`
  color: purple;
  font-size: 3.5rem;
  `;

  const StyledDiv = styled.div`
  background-color: lightblue;
  `;

  const PWrapper = styled.div`
  display: flex;
  justify-content: center;
  `;

  return (
    <StyledDiv className="App">
      <StyledH1>NASA: Photo of the Day</StyledH1>
      <p>{photo.title}</p>
      <p>{photo.date}</p>
      <PWrapper>
      <p>{photo.explanation}</p>
      </PWrapper>
      <img src={photo.url} alt='NASA All Day!' style={imgSrc}/>
      <br></br>
      <button color='primary' size='lg' block>I Come In Peace!</button>
      <h4>Tamara Taylor</h4>
    </StyledDiv>
  );
}

export default App;
