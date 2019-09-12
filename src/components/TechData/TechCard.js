import React from 'react';
import styled from "styled-components";

const TechDiv = styled.div`
    width: 300px;
    box-shadow: 1px 1px 3px black;
    display: flex;
    flex-direction: column;
    margin: 20px; 
`;

const TechCard = props => {
    return (
        <TechDiv key={props.id}>
            <p>Cool Tech Coming</p>
            <p>{props.description}</p>
        </TechDiv>
    );
};

export default TechCard;