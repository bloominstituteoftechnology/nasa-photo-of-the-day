import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
    Container, Row, Col
  } from 'reactstrap';
import styled from "styled-components";

const Box = styled.div`
  background: pink;
  padding: 5%;
`;

const H1 = styled.h1`
  font-size: 30px;
  color: hotpink;
  transform: translateZ(500px);
`;

const H2 = styled.h2`
  font-size: 20px;
  color: deeppink;
  transform: translateZ(200px);
`;

const Text = styled.p`
  color: mediumvioletred;
  transform: translateZ(200px);
`;

const Content = styled.div`
  text-align: center;
  position: relative;
  transition: transform 3s;
  transform-style: preserve-3d;
  :hover{transform: rotateY(180deg);}
`;

const Front = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: rotateY(180deg);
`;

const Back = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: rotateY(180deg);
    backface-visibility: hidden;
`;

const NasaPhoto = props => {
    return (
        <Box>
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Card>
                        <Content>
                        <Front><CardImg top width="100%" src={props.picture} alt="Nasa's Universe of the Day" /></Front>
                        <Back>
                        <CardBody>
                            <CardTitle><H1>{props.title}</H1></CardTitle>
                            <CardSubtitle><H2>Date: {props.date}</H2></CardSubtitle>
                            <Text><CardText>{props.explanation}</CardText></Text>
                        </CardBody>
                        </Back>
                        </Content>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
};

export default NasaPhoto;