import React from "react";
import PhotoList from "./components/PhotoList";
import "./App.css";
import { Button } from "reactstrap";
import styled from "styled-components";

const AppContainer = styled.div `
background-image: linear-gradient(#BB73E0, #AF6480, #58126A);
height: 100%;
`;


export default function App() {
  return (
    <AppContainer className="App">
      <PhotoList />
      
    </AppContainer>
  )
}


