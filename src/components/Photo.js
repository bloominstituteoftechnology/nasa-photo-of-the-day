import React from "react";
import Text from "./Text";
import { Card, Button, CardImg, CardBody,
    CardTitle, CardText } from 'reactstrap';

const Photo = (props) => {
    return(
        <Card>
        <CardBody>
            <CardTitle tag="h1">{props.data.title}</CardTitle>
            <CardImg src={props.data.url} alt="#"/>
            <CardText>{props.data.explanation}</CardText>
        <Button>{props.data.date}</Button>
        </CardBody>
    </Card>
    )
}

export default Photo



