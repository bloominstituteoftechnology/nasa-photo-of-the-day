import React, { useState } from "react";
import "./App.css";

import Body from './Components/Body';
import styled from 'styled-components';

import earth from './images/earth.jpg';
const Styled = styled.div `
  .App {
    position: relative;
  }
  .container {
    display: inline-flex;
    align-items: center;
    bacgroundImage:{earth};
    border:1px solid red;
    padding-bottom:100%;
    width:100%;
    height:100%;
    
  }

  button {
    position: absolute;
    font-size: 40px;
    color: white;
    margin-left: 35%;
    border: 1px solid black;
    border-radius: 15px;
    background-color: black;
    padding: 12px;
    margin-top: 50%;

    &:hover {
      opacity: 0.5;
    }
  }

  h1 {
    position: absolute;
    margin-bottom: 25%;
    margin-left: 33%;
    color: white;
    font-size: 50px;
    font-family: Arial sans-serif;
    margin-top: 50%;
  }

 
`

function App() {
  const [ showBody, setShowBody ] = useState(false);

  const openBody = () => {
    setShowBody(prev => !prev)
  }; 

  return (
    <Styled className="App"> 
      <div className="container" style={{ backgroundImage: `url(${earth})` }} >
      <Body showBody={showBody} setShowBody={setShowBody} />
        {showBody? false: <h1>Nasa Photo of The Day</h1>}
        {showBody? false:<button onClick={openBody}>Welcome To Nasa API</button>}
      </div>
    
    </Styled>
  );
}

export default App;
