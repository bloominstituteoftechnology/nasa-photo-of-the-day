import React from 'react';
import styled from 'styled-components';

const ImageDiv = styled.div`
  width: 60%;
  padding: 10px;
  margin: 0 auto;
  background-color: black;
  opacity: .8;
  border: 2px solid grey;
  border-radius: 3px;
`;

const ActualImage = styled.img`
  max-width: 60%;
  border-radius: 5px;
`;

const ExplanationDiv = styled.div`
font-family: 'Montserrat', sans-serif;
width: 60%;
color: #e8e8e8;
padding: 15px;
margin: 0 auto;
background-color: black;
opacity: .7;
border: 2px solid grey;
border-radius: 3px;
`;

function Card(props) {
// Display a loading message while the data is fetching
console.log(props);
if (!props.image) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
return (
    <ImageDiv>
  <ActualImage 
  src={props.image}
  alt="space and stars nasa"
  />
  <ExplanationDiv>
    <p>{props.date}</p>
    <p>{props.explanation}</p>
  </ExplanationDiv>
</ImageDiv>)
}

export default Card;