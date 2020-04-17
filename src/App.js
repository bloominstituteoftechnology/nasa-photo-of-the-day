import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import DropDown from "./DropDown";
import styled from 'styled-components';

const P = styled.p`
max-width: 80%;
padding-left: 11%;
font-size: 1rem;
color:white;
text-shadow: 2px 2px 2px black;
`;

function App () {
  const[nasaPic, setNasaPic] = useState({data:[]});
  console.log("Here is your array", nasaPic.data);
  const nasa = nasaPic.data;

  useEffect(()=>{
    const fetchImg = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => setNasaPic(res))
    };
    fetchImg();
  },[])
  return (
    <div className="App">
      <h1 className="heading">NASA Pic of the day!</h1>

      <P>{nasa.date}</P>  
    
 
      <img 
        src={nasa.url} 
        alt='Nasa Pic of the Day'
        key={nasa.id} 
      />
        <DropDown />
      <P>{nasa.explanation}</P>

      
    </div>
  );
}

export default App;
