import React from "react";
import "./App.css";
// import axios from 'axios';
import Card from "./Card";
import styled from 'styled-components';

const AppWrapper = styled.div` 
  background-color: #C3C0C0;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

function App() {

  return (
    <AppWrapper className='app'>
      <Card />
    </AppWrapper>
  );
};

export default App;
