import React from 'react';
import styled from "styled-components";

const MarsDiv = styled.div`
    width: 300px;
    box-shadow: 1px 1px 3px black;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    margin: 20px; 
`;
const MarsH1 = styled.h1`
    font-size: 20px;
`;
const SubH2 = styled.h2`
    font-size: 12px;
`;

const MarsCard = props => {
    return (
        <MarsDiv key={props.id}>
            <MarsH1>Mars Status</MarsH1>
            <SubH2>Weather: </SubH2>
            <SubH2>Temperature: </SubH2>
            <SubH2>Seismology: </SubH2>
        </MarsDiv>
    );
};

export default MarsCard;