import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ImgCard from "./components/ImgCard.js";
import "./App.css";
import styled from "styled-components";

const TitleH1 = styled.h1`
  font-size: 65px;
  color: white;
  font-family: The Wild Hammers;
  background-color: black;
  padding: 3%;
  margin-top: 1%;
  border: 1.5px solid white;
  box-shadow: 5px 5px 5px slategray;
  `

  const BorderPara = styled.p`
    font-size: 12px;
    padding:2%;
    background-color: black;
    color: white;
    align-text: center;
    border: 1.5px solid white;
    box-shadow: 5px 5px 5px 0px slategray;
    `;

function App() {
return (
  <div className = "App">
    <TitleH1>Nasa Image of the Day</TitleH1>
   <ImgCard />
   <div className = "border">
     <BorderPara>Copyright Nasa 2019 | All Rights Reserved</BorderPara>
   </div>
    </div>	 
      
  
);
}

export default App;
