import React from 'react'
import "./DataMain.css"
import styled from "styled-components";

const Container =styled.div`
display: flex;
max-width: 1295px;
margin-right: auto;
margin-left: auto;
`

const StyledDiv = styled.div`
position: relative;
display: inline-block;
`;

const StyledImage = styled.img`
max-width: 70%;
max-height: auto;
align-items: center;
`;

const ExplainP = styled.p`
color: white;
margin-bottom: auto;
margin-top: 80px;
width: 30%;
background-color: #4682B4;
padding: 10px;
`;


const AboutTitle = styled.h2`
color: black;
position: absolute;
z-index: 999;
margin: 0 auto;
left: 0;
right: 0;
top: 0%; 
text-align: center;
width: 60%;
background-color: white;
opacity: 70%;

`

function DataMain (props) {

    return (
        <Container>

            <StyledDiv>
                <AboutTitle>
                    {props.data.title}
                    <br></br>
                    {props.data.date}
                </AboutTitle>
            <StyledImage src ={props.data.url} alt="nasa daily"></StyledImage>
            </StyledDiv>

        <ExplainP>{props.data.explanation}</ExplainP>
        </Container>
    )
}


export default DataMain