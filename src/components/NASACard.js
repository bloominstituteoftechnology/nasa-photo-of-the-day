import React from "react";
import {
  Card, CardImg, CardText, CardBody, CardHeader,
  CardTitle
} from 'reactstrap';

const NASACard = props => {
  // return(
  //  <div className="NASACard">
  //    <h2>Title: {props.title}</h2>
  //    <img className="NASAIMG" alt="random NASA" src={props.imgURL} />
  //     <p className="explanation"> Explanation: {props.explanation}</p>
  //     <p className="date">Date: {props.date}</p>
  //  </div>
  // );
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title: {props.title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardImg>{props.imgURL}</CardImg>
        <CardText>Explanation: {props.explanation}</CardText>
        <CardText>Date: {props.date}</CardText>
      </CardBody>
    </Card>
  )
};

export default NASACard;