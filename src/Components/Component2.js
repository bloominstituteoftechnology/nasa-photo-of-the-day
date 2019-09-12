import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const ComponentTwo = props => {
    return (
        <div className="nasa-card" key={props.id}>
            <h3>{props.date}</h3>
            <h2>{props.title}</h2>
            <CardText>
            {props.explanation}
            width="70%"
            </CardText>
            
            <CardImg
                top
                width="70%"
                alt="nasa img" 
                src={props.hdurl}
            />
            <p>{props.copyright}</p>
        </div>
    )
}

export default ComponentTwo;