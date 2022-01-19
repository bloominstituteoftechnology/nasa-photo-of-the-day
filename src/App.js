import React, { useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import {Card} from './Card'
import Header from "./Header";
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
const Test = styled.p`
color:blue;
`
function App() {

  return (
    <div className="App">
      <Header/>
      <Card/>
 
      <Test>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </Test>
    </div>
  );
}

export default App;
