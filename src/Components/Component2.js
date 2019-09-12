import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const ComponentTwo = props => {
    return (
        <Card>
            <CardBody>
                <CardTitle><h2>{props.title}</h2></CardTitle>
                <CardSubtitle><h3>{props.date}</h3></CardSubtitle>
                <CardText>{props.explanation}</CardText>
            </CardBody>
        
            <CardImg
                top
                width="70%"
                alt="nasa img" 
                src={props.hdurl}
            />
            <p>{props.copyright}</p>
        </Card>
    )
}

export default ComponentTwo;