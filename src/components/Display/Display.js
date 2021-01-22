import React from "react";
import "../../App.css";
import styled from "styled-components"

const Display = (props) => {

    const { data } = props;

    return(
        <StyledContainer>
            <ImageContainer>
                <Image alt="picture of the day" src={data.url}></Image>
            </ImageContainer>
            <TextContainer> {data.explanation} </TextContainer>
        </StyledContainer>
    );
};



export default Display;

const StyledContainer = styled.div ` 
    background-color: #393B45;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    
`

const ImageContainer = styled.div ` 
        &:hover{
            border: 2% solid;
            border-color: #D8d9DE;
            border-radius: 1%1%;
            transition: all 0.5s ease-in-out;
        };

`
const TextContainer = styled.div ` 
    border: 2px solid white;
    width: 60%;

`
const Image = styled.img ` 
    height:70vh;
`