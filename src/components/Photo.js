import React, { useState } from "react";
import styled from 'styled-components'
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap'

const Photo = props => {

    const { title, description, imageURL, date } = props;


    return (
        <div>

            <Container>
                <Header><h1>NASA Photo of The Day</h1></Header>
                <Date><p>{date}</p></Date>
                <Title><h2>{title}</h2></Title>
                <Description><p>{description}</p></Description>
                {/* {link.split(" ").includes("youtube") ? <iframe width='800' height='380' src={imageURL} title='video-of-the-day'></iframe> : <img src={imageURL} alt="N/A" />} */}
                <img src={imageURL} alt="N/A" />
                {/* <iframe width='800' height='380' src={imageURL} title='video-of-the-day'></iframe> */}
            </Container>

        </div>
    );
}


const Container = styled.div`
background-color: #121312;
justify - content: center;
align - items: center;
flex - direction: column;
margin: 15px; `

const Title = styled.h1`
color: #E2E5E2;
font-family: 'Space Mono', monospace;
`
const Header = styled.h1`
color: #12339A;
font-family: 'Space Mono', monospace;
`
const Date = styled.p`
color: #E2E5E2;
`
const Description = styled.p`
color:#E2E5E2;
font-family: 'Space Mono', monospace;
`
const Image = styled.img`
border-radius: 10px;
`





export default Photo;