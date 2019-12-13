import React from "react";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';




function PhotoCard (props) {
    return (
   <Col key ={props.id}>
    <Card  size="sm" style={{backgroundColor: '#f1f1f1'}}>
        <CardImg top width="100%" src= {props.imgUrl} alt="NASA APOD" />
        <CardBody>
          <CardTitle style={{color: 'red'}}>{props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
          
        </CardBody>
      </Card>
    </Col>
        
        
    )

 }

 export default PhotoCard;