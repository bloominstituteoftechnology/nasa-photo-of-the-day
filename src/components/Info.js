import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardHeader,Badge, CardSubtitle
  } from 'reactstrap';



const CardInfo = props => {
    console.log("CARD info", CardInfo);
    return (
        <Card>
            <CardHeader>
                <CardTitle>Title: {props.title}</CardTitle>
                <CardSubtitle>Date: {props.date}</CardSubtitle>
            </CardHeader>

            <CardBody>
                <CardImg src ={props.img}></CardImg>
                <CardText>Info: {props.explanation}</CardText>
                <Badge color="info">Photo Taken By: {props.copyright}</Badge>

            </CardBody>
        </Card>
    );
};

export default CardInfo;

