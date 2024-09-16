import React from "react";
import styled from 'styled-components';


const StyledPhoto = styled.div `
    img {
        border: 4px solid black;
        border-color: ${prop => prop.theme.secondaryColor};
    }
    color: ${prop => prop.theme.color};
`
const StyledTitle = styled.h1 `
    padding-top: 2%;
    margin-bottom: 2%;
    border-bottom: 2px solid white;
`
const DateP = styled.p `
    font-weight: 750;
    font-size: 1.6rem;
    align-items: center;
`
const StyledImg = styled.img `
    width: 100%;
`

const ExplanationP = styled.p `
    margin-top: 5%;
    font-weight: 750;
    border: 4px solid black;
    padding: 3.5%;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
    }
    
`

const NasaPhoto = props => {
return (
    <StyledPhoto>
        <StyledTitle>{props.photo.title}</StyledTitle>
        <DateP>Date: {props.photo.date}</DateP>
        <StyledImg src = {props.photo.url} alt = 'The daily NASA img'/>
        <ExplanationP>{props.photo.explanation}</ExplanationP>
    </StyledPhoto>
)
}

export default NasaPhoto;