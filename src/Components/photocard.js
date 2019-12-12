import React from "react";
import { CardBody, Card, CardSubtitle, CardText } from 'reactstrap';
import styled from "styled-components";

export default function PhotoCard(props) {
    const Dailypic = styled.img`
        width: 60%
        border-radius: 15px;
        position: relative;
        left: 400px;
    `
    const Galaxy = styled.div`
        background-color: black;
        font-family: 'Orbitron', sans-serif;
    `
    const Mytitle = styled.div`
        
        font-size: 3rem;
        background: -webkit-linear-gradient(#FC3D21, #0B3D91);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `
    const Mytext = styled.div`
        font-size: 1.3rem;
        background: -webkit-linear-gradient(#0B3D91, #FC3D21);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `
    return (
        <Galaxy>
            <Card>
                <Dailypic src={props.hdurl} alt="space stuff"/>
                <CardBody>
                    <Mytitle>{props.title}</Mytitle>
                    <CardSubtitle style={{FontSize: '2rem'}} >{props.date}</CardSubtitle>
                    <Mytext>{props.explanation}</Mytext>
                </CardBody>
            </Card>
        </Galaxy>
    );
}