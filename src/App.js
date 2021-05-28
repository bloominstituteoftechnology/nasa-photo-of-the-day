import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Info from './components/Info.js'                   // When Linking components we need to type out their path. 
import styled from 'styled-components'

// Component Style. (npm install styled-components) & (import styled from 'styled-components')
// Never nest defined component styles inside React components. Keep them outside of the components.
// TERMONOLOGY: Define styles, not declare styles!
// You can import styles.

const StyledH1 = styled.h1`
  color: dodgerblue;
  font-size: 3rem;
  
`;

const StyledDiv = styled.div`
  background-color: lightgrey;
  

`;


const H1Wrapper = styled.div`
  display: flex;
  justify-content: center;
  // border: 2px solid red;
`;

const IMGwrapper = styled.div`
  display: flex;
  justify-content: center;
  // border: 3px solid blue;
`;



//_____________________________________________________________________________________

// Parent
export default function App(){

  const [apodData, setApodData] = useState({})            // Since we set an object, we create an empty object, although other things usually work fine. 
  console.log(apodData)                                   // Always console.log to see what is going on.

  useEffect(() => {                                       // This makes the data fetch occur once rather than on every state change. Because of [].                    
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=I7FKEo5cyioKDlwxTjWorNCaEg8P0SWvuZkXMoNN') // This is where we get our data from.
      .then(res => {
        setApodData(res.data)                             //  This sets the state / gives it value.
      })
      .catch(err => {
        console.log('ERR')
      })
  }, [])                                                  // [] Makes the useEffect occur once. Dependency array.

  return (
    <StyledDiv>
      <H1Wrapper>
        <StyledH1>NASA Picture of the Day</StyledH1>
      </H1Wrapper>  
      <IMGwrapper>
        <img src={apodData.url} alt={apodData.title}/>
      </IMGwrapper>  
      
      
      <Info apodData={apodData}/>  {/* Key value pair, & props is the object name in the child. Also, where you place the line matters, just like in HTML.*/}

    </StyledDiv>
  );
}


//_________________________________________

// Scraps:

// display: flex;
// flex-direction: column;

// flex-wrap: wrap;
// min-height: 100vh;
// align-items: center;
// justify-content: space-evenly;
// color: white;
// &:hover {
//   color: silver;
//   transition: 5s;
//   background-color: #1D2951;
// }