import React from "react";
import styled from 'styled-components';

const APODTitle = styled.h2`
font-size: 2rem;
font-weight: 200;
border-bottom: 0.2rem solid #FC3D21;
padding-bottom: 1rem;

`

const Img = styled.img`
width: 30rem;
height: 30rem;
border: 0.5rem solid #fff;
object-fit: cover;
margin: 3rem auto;
`;


const Info = styled.p`
    margin: auto 3rem;
    text-align: justify;
    text-justify: auto;
`

const InfoCard = (props) => {

    if (!props.photo) return <h3>Loading...</h3>
    return (
        <div>
          <APODTitle>{props.title}</APODTitle>
            <p>{props.date}</p>
           
            <Img src = {props.photo} alt = 'daily astronomy'></Img>
            <Info>{props.caption}</Info>
        </div>
    )
}

export default InfoCard;