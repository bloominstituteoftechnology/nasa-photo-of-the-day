import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardHeader, CardFooter, Badge
  } from 'reactstrap';

  import "./AstroCard.css"

const AstronomyCard = (props) => {

    const { title, url, hdurl, explanation, date, copyright } = props.data;
    return (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card className="astronomy-card">

        <CardHeader className="astronomy-title">{title}</CardHeader>

        <CardImg top width="100%" src={url} alt={title} />

        <CardText>{explanation}</CardText>

        <CardFooter>
            <Badge color="success" >{date}, {copyright}</Badge>
            </CardFooter>

        </Card>
        </Col>
    )
}


export default AstronomyCard;

// href={hdurl} className="astronomy-image-wrapper">
//             <img src={url} alt={title} />