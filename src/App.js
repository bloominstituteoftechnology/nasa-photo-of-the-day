import React from "react";
import "./App.css";
import Title from "./Title";
import Photo from "./Photo";
import Caption from "./Caption";
import styled from 'styled-components';

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
  return (
    <Body className="App">
      <img className ='logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" alt='nasa logo'></img>
      {/* <img src='../src/logo/NASA_logo.scg
    '></img> */}
      <Header>Astronomy Photo of the Day</Header>
      
      <Title />
      <Photo />
      <Caption />

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </Body>
  );
}

export default App;
