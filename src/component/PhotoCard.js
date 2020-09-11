import React from "react";
import styled from "styled-components";


const NasaCard = (props) => {
  const ImageCard = styled.div`
  border: 10px ;
  margin: 20px;
  padding: 20px;
  color: darkblue
  ;
  display: flex;
  flex-direction: column;
  align-items: center;
  `
 const ImageStyle = styled.img`
 width: 1200px;
 height: 500px;
 `
const ParagraphStyle = styled.p`
width: 900px;
`
  return (
    <ImageCard>
      <h1>{props.data.title}</h1>
      <h3> {props.data.date}</h3>
      <ImageStyle src={props.data.hdurl} alt ={props.data.title}/>
      <ParagraphStyle> Explanation: {props.data.explanation} </ParagraphStyle>
    </ImageCard>
  );
};

export default NasaCard;