import React, { useEffect, useState } from "react"
import axios from 'axios'
import Body from './Body'
import styled from 'styled-components'
import "./App.css";

const StyledDiv = styled.div`
background-color: black;
margin: 0 0;
height: 100vh
`

function App() {
  const [apodData, setApodData] = useState({})

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=7ZzS3ozkfNJm2ndSoMnETYqKThcBAmSgLffXPacp')
      .then(res => {
        setApodData(res.data)
      })
      .catch(error => {
        console.log(error.res.status, error.res.data)
      })
  }, []);
  console.log(apodData)

  return (
    <StyledDiv className="App">
      <Body data={apodData} />
    </StyledDiv>
  );
}

export default App;
