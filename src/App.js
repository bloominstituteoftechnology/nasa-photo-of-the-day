//Styles Added
import axios from 'axios';
import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './api';
import Photo from './components/Photo';
import Explanation from './components/Explanation';
import Copyright from './components/Copyright';
import Date from './components/Date';
import Title from './components/Title';
import styled from 'styled-components'

const StyledApp = styled.div`
  
  width: 100vw;
  background-color: #22223B;
`
const StyledHeader = styled.div`
background-color: #C9ADA7;

`



function App() {

  const [nasaInfo, setNasaInfo] = useState ([])
  
  useEffect (() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(res => {
    console.log(res.data);
    setNasaInfo(res.data);
  })
}, [])
  return (
    <StyledApp>
    <div className="App">

      <StyledHeader>
        <Title title={nasaInfo.title} />
        <Copyright copyright={nasaInfo.copyright} />
        <Date date={nasaInfo.date} />
        
        </StyledHeader>

        
        <div className="midSection">

          
        <Photo image={nasaInfo.url} />
        

        <Explanation explanation={nasaInfo.explanation} />

        </div>
       

    </div>
    </StyledApp>
  );
}


export default App;
