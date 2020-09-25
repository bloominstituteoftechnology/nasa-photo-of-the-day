import React from "react";
// import Text from "./Text";
import styled from "styled-components";
import { Card, Button, CardImg, CardBody,
    CardTitle, CardText } from 'reactstrap';


const Image = styled.div`
    width: 75%;
    border: none:
    border-radius: 50px;
    margin: 0 auto;
    
    `;

const Paragraph = styled.p`
    margin: 2%;
`;


const Photo = (props) => {
    return(
        <div>
        <Card>
        <CardBody>
            <CardTitle tag="h1">{props.data.title}</CardTitle>
            <Image>
            <CardImg Image src={props.data.url} alt="#" />
            </Image>
            <Paragraph><CardText>{props.data.explanation}</CardText></Paragraph>
        <Button>{props.data.date}</Button>

        </CardBody>
    </Card>
    </div>
    )
}

export default Photo



