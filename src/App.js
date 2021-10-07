import React from "react";
import "./App.css";
import Pic from "./nasaPic";
import Title from "./nasaHeader";
import Copy from "./nasaFooter";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import {keyframes} from 'styled-components'

const Heart = styled.div`
  position: relative;
  width: 100px;
  height: 90px;
  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: red;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

const heartBeat = keyframes`
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1.1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1.1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
`;

const AnimatedHeart = styled(Heart)`
  animation: ${heartBeat} 1s infinite;
`;


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <AnimatedHeart />
      <Title />
      <Pic />
      <Copy />
    </div>
  );
}

export default App;
