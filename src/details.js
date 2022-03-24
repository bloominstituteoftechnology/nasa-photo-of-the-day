import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledDetails = styled.div`
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;
  background-color: orange;
  p {
    color: ${props => props.theme.tertiaryColor};
  }
  h2 {
    color: ${props => props.theme.primaryColor};
  }
`

const Details = props => {
  return (
      <StyledDetails>
        <h2>{props.photos.title}</h2>
        <h3>Date: {props.photos.date}</h3>
        <h4>Explanation: {props.photos.explanation}</h4>
      </StyledDetails>
  )
}

export default Details;