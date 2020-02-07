import React from 'react'
import NavBurger from "./NavBurger"
import FooterNav from "./FooterNav"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Alert
  } from 'reactstrap';

const ApodCard = (props) => {
    return (
        <div className="apod-info">
            <NavBurger/>
            <Card>
           <CardImg top width="100%" src= {props.hdurl} alt="APOD"/>
           <CardBody>
            <Alert color="dark">
           <CardTitle> {props.title}</CardTitle>
           <CardTitle>copyright {props.copyright}</CardTitle>
           <CardTitle>{props.date}</CardTitle>
           <CardText>{props.explanation} </CardText>
           </Alert>
            </CardBody>
            <FooterNav/>
            </Card>
            
        </div>
    );
};
export default ApodCard;


