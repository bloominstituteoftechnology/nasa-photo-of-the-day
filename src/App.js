import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// import Title from "./Title";
// import Photo from "./Photo";
// import Caption from "./Caption";
import InfoCard from "./InfoCard"
import styled from 'styled-components';

const phDate = new Date();
const dateFormat = phDate.getFullYear()+'-'+(phDate.getMonth()+1)+'-'+phDate.getDate();
const URL = 'https://api.nasa.gov/planetary/apod?api_key=cpIVh1n5cT7gdxurNPJfIw7fYEakx1I89h1UEoYT';


const Body = styled.div`
    background-color: #000;
    padding: 1rem;
    color: #fff;
`;

const Header = styled.h1`
font-size: 3rem;
text-align: center;
font-weight: 700;
text-transform: uppercase;
background-color: #0B3D91;
padding: 2rem 0.1rem; 
`;

function App() {
  const [state,setState] = useState({});

  useEffect( () => {
    axios.get(`${URL}&date=${dateFormat}`)
        .then( res => {
            console.log(res.data);
            setState(res.data)   
        })
        .catch(err => err);
            },[])
  return (
    <Body className="App">
      <img className ='logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" alt='nasa logo'></img>
      {/* <img src='../src/logo/NASA_logo.scg
    '></img> */}
      <Header>Astronomy Photo of the Day</Header>
      <InfoCard
     title = {state.title}
     date = {state.date}
     photo = {state.url}
     caption = {state.explanation}
     
     />
      

    
    </Body>
  );
}

export default App;
console.log(dateFormat)