import React from "react";
import "./App.css";
import Header from './Header'
import Photo from './Photo'
import styled from 'styled-components'

const HeaderDiv = styled.div `

color: blue;
font-family: courier-new;
padding: 20px;


`

const StyledApp = styled.div `

background-color: gray; 

padding: 185px;


`
const StyledPhoto = styled.div `

color: #f7b508;
font-family: courier-new;
padding: 20px;
word-spacing: 5px;


`



function App() {
  return (
    <div className="App">
      <StyledApp>
      <HeaderDiv>
      <Header/>
      </HeaderDiv>
      <StyledPhoto>
      <Photo/>
      </StyledPhoto>
    </StyledApp>
    </div>
  );
}

export default App;
