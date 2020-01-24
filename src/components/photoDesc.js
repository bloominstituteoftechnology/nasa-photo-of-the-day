import React from "react";
import styled from "styled-components";

const APODBodyText = styled.p`
    font-family: 'Space Mono', monospace;
    text-align: left;
    margin: 20px;
    padding: 20px;
    border: 1px solid #8C8C8C;
    background: #D9D9D9;
    border-radius: 3px;
    box-shadow: 0px 0px 5px 5px rgba(140, 140, 140, .3); `;

const PhotoDesc = props => {
  console.log(`PhotoDesc: props: `, props);
  return (<APODBodyText>Photo Description: {props.description}</APODBodyText>);
};

export default PhotoDesc;