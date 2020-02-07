import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Alert
  } from 'reactstrap';

const ApodCard = (props) => {
    return (
        <div className="apod-info">
            <Card>
           <CardImg top width="100%" src= {props.hdurl} alt="APOD"/>
           <CardBody>
            <Alert color="dark">
           <CardTitle> {props.title}</CardTitle>
           <CardTitle>{props.date}</CardTitle>
           <CardText>{props.explanation} </CardText>
           </Alert>
           <Alert color="info">
            <div>copyright {props.copyright}</div>
            </Alert>
            </CardBody>
            </Card>
        </div>
    );
};
export default ApodCard;


