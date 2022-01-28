import React from "react";
import styled, { keyframes } from "styled-components"

const kf = keyframes`
    50% {
    transform: scale(0.8);
    }
    100% {
    opacity: 1;
    transform: scale(1);
}
`
const StyledCard = styled.div`
    opacity: 0;
    transform: scale(2);
    animation: ${kf} 1s ease-in-out forwards;

    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-space-evenly;
    flex-flow : column;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    background-color: black;
`
const StyledCardImage = styled.div`

    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    flex-flow : column;
    padding-top: 25px;
    padding-bottom: 25px;
    
    
`
const StyledCardInfo = styled.div`

    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    flex-flow : column;
    padding: 10px;
    color: lightgrey;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
`
const StyledCardExplanation = styled.div`

    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    flex-flow : column;
    padding: 2px;
    line-height 1.75rem;
`
export default function Card(props){
    const { data } = props
    console.log(props)
    console.log('Hello I am the render of Card.js')
    
    return (
    <StyledCard>

        <StyledCardImage>
        <img src={data.url} alt=""/>
        </StyledCardImage>
        <StyledCardInfo>
        <h3>{data.title}</h3>
        <h4>{data.date}</h4>
            <StyledCardExplanation>
                <p>{data.explanation}</p>
            </StyledCardExplanation>
        </StyledCardInfo>
    </StyledCard>
    )
}