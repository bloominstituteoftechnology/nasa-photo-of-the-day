//importing Component
import React from "react";
import PhotoList from "./PhotoList";
import styled from "styled-components";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Badge, Container, Row,
  } from 'reactstrap';

  
//Styled Components
const contain = styled.section`
  background: gray;
` 

//Creating Component
const PhotoCard = ({date, title, desc, pic}) => {
    console.log(date, title, desc);
    return (
    <contain>
    <Container>
        <Card>
            <CardImg img src = {pic} alt = "space photo"/>
            <CardTitle>Title: {title}</CardTitle>
            <CardBody>
                <Badge>Date: {date} </Badge>
                <CardText>Description {desc}</CardText>
            </CardBody>
        </Card>
        
    </Container></contain>
    )
}

export default PhotoCard;
