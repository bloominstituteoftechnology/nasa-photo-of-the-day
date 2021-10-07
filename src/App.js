import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import TitleSect from "./components/title.js";
import CopyrightSect from "./components/copyright.js";
import ImageSect from "./components/image.js";
import DateSect from "./components/date.js";
import ExplanationSect from "./components/explanation.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';
import styled, { keyframes } from "styled-components";

const kf = keyframes`
100% {
  background-color: yellow;
}
`

const BodyStyle = styled.body`
background-color: red;
animation: ${kf} pulse 2s infinite;
`

export const LoadSpinner = (props) => {
  return (
    <div>
      <Spinner size="m" color="secondary" />
    </div>
  );
}
function App() {

//returns

  return (
    <div className="App">
      <BodyStyle>
      <TitleSect/>
      <ImageSect/>
      <DateSect/>
      <ExplanationSect/>
      <CopyrightSect/>
      <LoadSpinner/>
      </BodyStyle>
    </div>
  );
}

export default App;
