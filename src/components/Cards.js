import React, { useState } from 'react';
import styled from "styled-components";

const Title = styled.h1`
    font-size: 36px;
    letter-spacing: 3px;
`;

const Date = styled.p`
    font-size: 30px;
`;

const Explanation = styled.p`
    font-size: 24px;
    width: 50%;
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
            <div>
                <img src = {props.imgUrl}></img>
            </div>
            <div>
            <Explanation>
                <p>{props.explanation}</p>
            </Explanation>
            </div>
        </div>
    );
};

export default Card; 