import React, {useState, useEffect} from "react";
import styled from 'styled-components';

const InfoContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    color: white;
    border: solid .5vw white;
    max-width: 70%;
    padding: 5vh 10vw;
    margin: 0vh 10vh 10vh 10vh;
    background-color: #27272775;
    border-radius: 2.5vw;
    border-top: none;
    border-bottom: none;
    margin-top: 5vh;
`
const InfoP = styled.p`
    margin: .5vh;
    border-radius: .5vw;
    background-color: #00000080;
    padding: .25vw;
    width: fit-content;
`

const Info = props =>{
    const {copyright, date, explanation, title} = props.data;

    return (
        <InfoContainer className="info-container">
            <InfoP>Title: {title}</InfoP>
            <InfoP>Date: {date}</InfoP>
            <InfoP>{explanation}</InfoP>
            <InfoP>Copyright: {copyright}</InfoP>
        </InfoContainer>
    )
};

export default Info