import React, { useRef, useEffect, useState } from "react";
import styled from 'styled-components';


const Card = styled.div`
  margin: 40px;
`;

const CardImage = styled.img`
  max-width: 100%;
`;

const CardH3 = styled.h3`
  align-items: center;
  color: navy;
`;


const ImageCard = props => {
  return(
   <Card className="imagesCard">
   <CardImage src={props.item.url} alt="Nasa picture of the day"/>
   <CardH3>{props.item.title}</CardH3>
   <p>{props.item.explanation}</p>
   </Card>
  )
};

export default ImageCard;
