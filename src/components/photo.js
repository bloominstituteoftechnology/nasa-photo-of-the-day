import React from 'react';
import axios from "axios";
import styled from "styled-components";


const APODImg = styled.img`
    max-width: 100%; `;

const Photo = props => {
 console.log(`Photo: props: `, props);
 return (<APODImg src={props.url} alt="NASA pic of the day" />);
  };
  
  export default Photo; 