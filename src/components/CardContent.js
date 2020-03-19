import React from "react";
import {Col, Collapse,Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"


const FontMe = styled.h1`
    font-family: 'Codystar', cursive;
    margin: 4%;
`;
const BackgroundMe = styled.div`
    background: ${props => (props.visible ? "black" : "white")};
    &:hover {background:  ${props => (props.visible ? "white" : "black")};}
`;

const CardContent = (props) =>{
    // console.log(props)

    return(
        <BackgroundMe visible>
        <Card>
            <FontMe>{props.info.title}</FontMe>
            <Button>{props.info.date}</Button>
            <CardBody>
                <h5>{props.info.copyright}</h5>
                <CardImg top width="60%" className="photo" alt="photo of the day" src={props.info.url} />
                <Row>
                    <Col>
                      <CardText >{props.info.explanation}</CardText>
                     </Col>
                </Row>
             
               
            </CardBody>
            
        </Card>
        </BackgroundMe>
    )
}

export default CardContent