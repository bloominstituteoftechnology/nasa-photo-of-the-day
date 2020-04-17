import React, { useState } from 'react';
import styled from "styled-components";

const Title = styled.h1`
    font-size: 36px;
    letter-spacing: 3px;
    background: -webkit-linear-gradient(left, #161A42, #06669B, #01DF96);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:black;
    
`;


const Date = styled.p`
    font-size: 30px;
`;

const Explanation = styled.p`
    font-size: 24px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    width: 30em;

`;


const Card = props => {
    return (
        <div>
            <Title>
                <h1>{props.title}</h1>
            </Title>
            <Date>
                <p>{props.date}</p>
            </Date>
                <img src = {props.imgUrl}></img> 
            <div>
            <Explanation>
                <p>{props.explanation}</p>
            </Explanation>
            </div>
        </div>
    );
};

export default Card; 