import React from "react";
// import { Container } from 'semantic-ui-react';
import styled from "styled-components";


const StyledH2 = styled.h2 `

color: navy;
text-decoration: underline;

`;

const Para = styled.p `

text-align: center;
margin: 0 auto;
width: 70rem;
padding: 1rem;

`;




function PhotoCard (props) {

    console.log(props);
    return (
        <div>
            <StyledH2>{props.title}</StyledH2>
            <img src={props.url} />       
                
            <Para>{props.explanation}</Para>
            </div>

    );
}

export default PhotoCard;
