import React from 'react'
import "./DataMain.css"
import styled from "styled-components";

const Container =styled.div`
margin-right: auto; 
margin-left: auto;
display: grid;
grid-template-columns: 2fr 400px;
grid-auto-rows: max(300px, auto);

`

const StyledDiv = styled.div`
position: relative;
display: block;
`;

const StyledImage = styled.img`
max-width: 80%;
max-height: auto;
grid-column: 1 ;
grid-row: 1;
`;

const ExplainP = styled.p`
color: white;
margin-bottom: auto;
margin-top: 2%;
width: 80%;
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
width: 80%;
background-color: white;
opacity: 65%;
`

const TodayDate = styled.h2`
font-size: 14px;
background-image: url('https://www.jpl.nasa.gov/images/earth/20200416/EarthRise-main-16.jpg');
text-decoration:underline; 
padding: 100px;
background-size: 150%;
border: 2px solid #696969;
margin-left: 30%;
`;

function DataMain (props) {

    return (
        <Container>
            <StyledDiv>
                <AboutTitle>
                    {props.data.title}
                    <br></br>
                </AboutTitle>
            <StyledImage src ={props.data.url} alt="nasa daily"></StyledImage>
            </StyledDiv>
 
        <ExplainP>{props.data.explanation}</ExplainP>

        <TodayDate>Todays Date :<br></br> {props.data.date}</TodayDate>
        </Container>
    )
}


export default DataMain