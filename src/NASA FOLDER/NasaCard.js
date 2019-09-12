import React from "react";
// import NasaPic from "./NasaPic";
import styled from "styled-components";


const DivCard = styled.div`
    width: 80%;
    max-height: 800px;
    border: 1px solid white;
    display: flex;
    flex-flow: column;
    align-items: center;


`;
const NasaImg = styled.img`
    width: 100%;
    object-fit: scale;    

`;

const NasaCard = props => {
    console.log(props);
    return (
        <DivCard className="pic-list" key={props.id}>
            <h1>Picture Title: {props.title}</h1>
            <NasaImg src={props.picture} alt="Random NASA"/>
            <p>Date: {props.date}</p>
            <p>Description:{props.description}</p>
        </DivCard>
    )
}

export default NasaCard;