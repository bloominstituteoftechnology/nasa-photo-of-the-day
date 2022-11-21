import React from 'react';
//import CardStyles from './styles';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

  const CardContainer = ({data}) => {
    const { date, title, explanation, url } = data;
    console.log("DATA", data)
        
        return (
        <div className="card-container">
            <Card>
                <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{date}</CardSubtitle>
                <CardImg width = "50%" src = {url} alt = "nasa photo of the day"/>
                <CardText>{explanation}</CardText>      

                </CardBody>
            

            </Card>

            <Card>
                <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{date}</CardSubtitle>
                <CardImg width = "50%" src = {url} alt = "nasa photo of the day"/>
                <CardText>{explanation}</CardText>      

                </CardBody>
            

            </Card>

            <Card>
                <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{date}</CardSubtitle>
                <CardImg width = "50%" src = {url} alt = "nasa photo of the day"/>
                <CardText>{explanation}</CardText>      

                </CardBody>
            

            </Card>

            <Card>
                <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{date}</CardSubtitle>
                <CardImg width = "50%" src = {url} alt = "nasa photo of the day"/>
                <CardText>{explanation}</CardText>      

                </CardBody>
            

            </Card>




        </div>
    )
}

export default CardContainer;