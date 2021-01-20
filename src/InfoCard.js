import React from "react";
import styled from 'styled-components';

const APODTitle = styled.h2`
font-size: 2rem;
font-weight: 200;
border-bottom: 0.2rem solid #FC3D21;
padding-bottom: 1rem;

`

const Img = styled.img`
width: 90%;
border: 0.5rem solid #fff;
margin: 3rem auto;
`;


const Info = styled.p`
    width:90%;
    height:auto;
    margin: 1rem auto;
    text-align: justify;
    text-justify: auto;
`

const InfoCard = (props) => {

    if (!props.photo) return <h3>Loading...</h3>
    return (
        <section className = 'infor-card'>
          <APODTitle>{props.title}</APODTitle>
            <div>{props.date}</div>
            <Img src = {props.photo} alt = 'daily astronomy'></Img>
            <Info>{props.caption}</Info>
        </section>
    )
}

export default InfoCard;