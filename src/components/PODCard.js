import React from 'react';
import styled from 'styled-components';

const Card = styled.section`
width: 520px;
margin-top: 5%;
margin-bottom: 5%;
margin-left: 120px;
`;

const PoDImg = styled.img`
width: 100%;
object-fit: scale;
flex-shrink: 2;
`;

const ImgDate = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 12px;
text-align: left;
color: #b8b8b8;
`;

const ImgTitle = styled.h2`
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 24px;
text-align: left;
`;

const ImgExp = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 12px;
line-height: 14px;
text-align: left;
`;

const Copy = styled.h3`
font-family: 'Roboto', sans-serif;
font-size: 14px;
text-align: left;
`;



const PODCard = props => {
  console.log(props);
  return (
    <Card key={props.url}>
      <PoDImg alt="NASA Photo of the Day" src={props.url}></PoDImg>
      <ImgDate>Date: {props.date}</ImgDate>
      <ImgTitle>{props.title}</ImgTitle>
      <ImgExp>{props.explanation}</ImgExp>
      <Copy>Copyright: {props.copyright}</Copy>
    </Card>
  );
};

export default PODCard;
