//State?: Light Maybe 
//Props?: Strong Maybe

import React from 'react';
import styled from "styled-components";
import NasaBG from '../Styles';



export const NasaImg = styled.img`
width: 350px;
`;


function NasaBody (props) {
    

    return (
        <article>
            <section> <NasaImg src={props.data.url} alt="nasaimage" /></section>
            <section> <p>Date: {props.data.date}</p></section>
            <NasaBG type='hl2'> <p>Description: {props.data.explanation}</p></NasaBG>
        </article>
    )
}

export default NasaBody;