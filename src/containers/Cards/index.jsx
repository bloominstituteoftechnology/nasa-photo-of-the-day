import React from 'react';
import CardStyles from './styles';
import NasaApi from './data';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

  const CardContainer = (props) => {
    const { date, title, explanation, url } = props.data;
    console.log(data)
    return (
        <CardStyles>
            <Card>
                <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{date}</CardSubtitle>
                <CardImg top-width = "80%" src = {url} alt = "nasa photo of the day"/>
                <CardText>{explanation}</CardText>      

                </CardBody>
            

            </Card>




        </CardStyles>
    )
}

export default CardContainer;