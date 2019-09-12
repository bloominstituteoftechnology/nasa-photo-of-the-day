import React from "react";
import "./App.css";
import NasaPic from "./NASA FOLDER/NasaPic";
import styled from "styled-components";


const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
`;

const AppTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 1%;
`;

const AppSubtitle = styled.h2`
  font-size: 3rem;

`;



function App() {
  return (
    <AppDiv className="App">
      <AppTitle>NASA's Photo of the Day</AppTitle>
        <AppSubtitle>Below is NASA's pic of the Day!</AppSubtitle>
        <NasaPic />
    </AppDiv>
  );
}

export default App;
