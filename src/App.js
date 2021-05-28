import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Info from './components/Info.js'                   // When Linking components we need to type out their path. 
import styled from 'styled-components'

// Component Style. (npm install styled-components) & (import styled from 'styled-components')

const StyledDiv = styled.div`
  color: dodgerblue;
  font-size: 3rem;
`;

// Parent
export default function App(){

  const [apodData, setApodData] = useState({})            // Since we set an object, we create an empty object, although other things usually work fine. 
  console.log(apodData)                                   // Always console.log to see what is going on.

  useEffect(() => {                                       // This makes the data fetch occur once rather than on every state change.                     
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=I7FKEo5cyioKDlwxTjWorNCaEg8P0SWvuZkXMoNN') // This is where we get our data from.
      .then(res => {
        setApodData(res.data)                             //  This sets the state / gives it value.
      })
      .catch(err => {
        console.log('ERR')
      })
  }, [])                                                  // [] Makes the useEffect occur once.

  return (
    <>
      <div>
        <StyledDiv>NASA Picture of the Day</StyledDiv>
      </div>
      <img src={apodData.url} alt={apodData.title}/>
      
      <Info apodData={apodData}/>  {/* Key value pair, & props is the object name in the child. Also, where you place the line matters, just like in HTML.*/}
    </>
  );
}