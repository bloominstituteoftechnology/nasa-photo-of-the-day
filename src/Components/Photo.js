import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardColumns
  } from 'reactstrap';

function Photo(props) {
  return (
 
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardImg top  width="100%" src={props.hdurl} alt="Card image cap"/>
      <CardBody>
      <CardTitle>Date: {props.date} </CardTitle>
      <CardSubtitle>Copyright: {props.copyright}</CardSubtitle>
      <br/>
      <CardText>{props.explanation}</CardText>
      </CardBody>
    </Card>

  )
}

export default Photo;
