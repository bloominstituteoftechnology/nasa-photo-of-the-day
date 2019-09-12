import React from "react";
// import NasaPic from "./NasaPic";
import styled from "styled-components";
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from 'reactstrap';


const DivCard = styled.div`
    width: 90%;
    max-height: 80%;
    border: 9px inset grey;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 10px;
`;
const NasaImg = styled.img`
    width: 95%;
    height: 80%;
    object-fit: scale;  
    border: 4px outset black;   
`;

const NasaTitle = styled.h1`
    font-weight: 900;
    text-decoration: underline;
    background
`;

const NasaParagraph = styled.p`
    width: 90%;
    line-height: 1.5;
    padding-bottom: 3%;


`;
const NasaCard = props => {
    console.log(props);
    return (
        <DivCard className="pic-list" key={props.id}>
            <NasaTitle>Picture Title: {props.title}</NasaTitle>
            <NasaImg src={props.picture} alt="Random NASA"/>
            <h2><small>Date: {props.date}</small></h2>
            <NasaParagraph>Description:{props.description}</NasaParagraph>
        </DivCard>
    )
}

export default NasaCard;