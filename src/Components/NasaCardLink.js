import React from "react";
import styled from "styled-components"

const Nasainfo=styled.div`
width: 80%;
text-align: center;
display: flex;
margin-left: 100px;
flex-direction: column
`
const NasaImg = styled.img
`height: 40%;
display: block;
justify-content: center;
align-items: center;
margin-top: 30px;`

const Para = styled.p`
width: 50%;
display: block;
text-align: center;
margin: auto;`



const NasaCardLink = props => {
  return (
  
     
    <Nasainfo>
      <NasaImg alt="Random NASA pic of the day" src={props.url} />
      <h1>{props.title}</h1>
      
      <h3>{props.date}</h3>
      <Para>{props.explanation}</Para>
      </Nasainfo>
  
    
  
  );
};
export default NasaCardLink