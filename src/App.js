import React from "react";
import SpaceImg from "./Components/SpaceImage"
import "./App.css";
import styled from "styled-components"



const PageContainer = styled.div`

background-color: #3c4245;
display: flex;
flex-direction: column;
align-items: center;
`;

const FirstLine = styled.p`

  font-size: 3.5rem;
  margin: 60px;

`;


function App() {
  return (
    <PageContainer className="App">
      
      {/* 🚀Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
       <FirstLine  className= "space"> Too much space in the outer space! </FirstLine >
        
     
           <SpaceImg/>
        
       
      
    </PageContainer>
  );
}

export default App;
