import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const nasaData = 'https://lambda-github-api-server.herokuapp.com/';

const WholeApp = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`
const StyledTitle = styled.div`
  width: 100%;
  background: peru;
  min-height: 80px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  h1 {
    color: #f2f2f2;
  }
  p {
    margin-right: 20px;
  }
`
const StyledImage = styled.div`
  width: 80%;
  margin: auto;
  height: 400px;
  background: peru;

  img {
    width: 100%;
    height: 100%;
  }
`

const StyledDescription = styled.div`
  width: 80%;
  margin: auto;
  height: auto;
  padding: 10px 30px;

  h2 {
    text-align: center;
    color: #636363;
  }
  p {
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
    color: #333
  }
`
const StyledFooter = styled.footer`
  width: 100%;
  background: peru;
  min-height: 60px; 
  margin: 0;
  padding: 10px 30px;

`

function App() {

  const [nasaInfo, setNasaInfo] = useState();

  // All functions here

  useEffect(() => {
    axios.get(nasaData)
    .then(response => {
      console.log(response);
      console.log(response.data);

        setNasaInfo(response.data);
      })
      .catch(error => {
        
      })
  }, []);

  
// console.log(nasaInfo);

  if (nasaInfo) {
    return (
      <WholeApp>
        <StyledTitle>
          <h1>{nasaInfo.title}</h1>
          <p>{nasaInfo.date}</p>
        </StyledTitle>      
        <StyledImage>
          <img src={nasaInfo.url} alt=''></img>
        </StyledImage>
        <StyledDescription>
          <h2>Description</h2>
          <p>{nasaInfo.explanation}</p>
        </StyledDescription>
        <StyledFooter>
          <p>{nasaInfo.copyright}</p>
        </StyledFooter>
      </WholeApp>
    )
  } else {
    return null;
  }
}

export default App;
