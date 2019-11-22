import React from "react";
import PhotoList from "./PhotoList";
import styled from "styled-components";


const Container = styled.div`
border: 1px dotted pink;
opacity: 0.8;
filter: alpha(opacity=30);
border-radius: 15px 30px;
margin: 0 auto;
width: 60%;
height: 80%`;


const Title = styled.h1 `
font-size: large;
color: indigo;`

const Img = styled.img `
width: 400px;
height: 400px;
border-radius: 3%`;

const H1 = styled.h1 `
color: indigo `;

const P = styled.p `
color: indigo
font-size: 18px`;

const Explanation = styled.h3 `
color: white;
font-size: 13px;
margin: 0 auto;
width: 70%;`



export default function PhotoCard(props) {
    return (
        
        <Container className="container">
            <Title className="title">
                <h1> NASA PHOTO A DAY</h1>
            </Title>
            <div className="heading">
                <P>Today: {props.date}</P>
            </div>
            <div className="pictures">
                <Img src={props.url} alt='Nasa Satellite Img'/> 
                <H1>{props.title}</H1>
            </div>
            <Explanation className="explanation">
                <h3>{props.explanation}</h3>
            </Explanation>
            
        </Container>
        
    )
}