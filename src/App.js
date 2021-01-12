import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photo from "./Photo.js"
import Info from './Info.js'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh
  

  `
  const StyledBody = styled.body`
  background: grey;
  width: 100%;
  height: 100%;
  `


function App() {
  
  
  

  return (
    <div className="App">
      <StyledBody>
      <StyledDiv>
      <Info>These are pictures from the beautiful Nasa space station</Info>
      <p>
        API from Americas space station <span role="img" aria-label='go!'>🚀</span>!
      </p>
        <Photo/>
        </StyledDiv>
        </StyledBody>
      </div>
  );
  }

export default App;
