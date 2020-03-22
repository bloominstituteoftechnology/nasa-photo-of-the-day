import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';
  
  

export default function NasaCardContainer(props) {
    return (
        <div>
            <Col sm="12" md={{ size: 6, offset: 3 }}>

                <Card style={{margin:"10px", opacity:"0.9", backgroundColor:"DODGERBLUE", color:"white"}}
>
                    <CardImg top width="100%" src={props.img} alt="Nasa Photo of the Day" />
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardText>{props.desc}</CardText>
                        <CardSubtitle>{props.date}</CardSubtitle>
                        <CardSubtitle>{props.copy}</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}