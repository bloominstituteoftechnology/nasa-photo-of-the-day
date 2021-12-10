import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import styled from "styled-components";

import Main from "./Components/Main";
import Header from "./Components/Header";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    max-width: 100%;
}
html{
    font-size:62.5%;
}
body{
    font-size:1.6rem;
    line-height:1.5;
    font-family: 'ABeeZee', sans-serif;

}
a{
    font-family: 'Source Sans Pro', sans-serif;
    color:#266035;
    text-decoration: none;
}`;

function App() {
  const [ nasaData, setNasaData ] = useState({});


  useEffect(() => {
    axios.get(`${REACT_APP_BASE_URL}?api_key=${REACT_APP_API_KEY}`)
      .then(res => {
        setNasaData(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    
    <Wrapper className="App">
      <Header nasaTitle={nasaData.title} nasaDate={nasaData.date} />
      <Main nasaImg={nasaData.hdurl} nasaExp={nasaData.explanation} nasaCopyright={nasaData.copyright} />
      
    </Wrapper>
  );
}

export default App;
