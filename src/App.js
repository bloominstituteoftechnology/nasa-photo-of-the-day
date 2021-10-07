import React, {useState, useEffect} from "react";
import "./App.css";
import Photo from "./Photo";
import axios from 'axios'
import Header from "./Header";
import Summary from "./Summary";
import styled from 'styled-components'


const StyledWrapper = styled.div`
text-align:center;
background-color:black;
color:white;
border: black 2px solid;
padding:20px;

`



function App() {
  const apiKey = '1Qg5Hb00n3IJDrbRLm8Um2zoXqJwFg6vZhSLcWm2';

  const [nasaData, setNasaData] = useState('');
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(res => {
        setNasaData(res.data);
      //setDetails(res.data)
    }).catch(err => {
      console.error(err);
    })
  }, [])


  return (
    
    <StyledWrapper>
     <Header nasaData={nasaData}/>
    <Photo />
    <Summary nasaData={nasaData}/>
    </StyledWrapper>
    
  );
}

export default App;
