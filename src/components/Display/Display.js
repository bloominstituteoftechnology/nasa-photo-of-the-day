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
    font-family: sans-serif;
    background-color: #393B45;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10%;
    
`

const ImageContainer = styled.div ` 
    padding: 2%2%;
    background-color: #D8d9DE;

`
const TextContainer = styled.div ` 
    width: 60%;
    margin:1%0%5%0%;
`
const Image = styled.img ` 
    height:70vh;
`