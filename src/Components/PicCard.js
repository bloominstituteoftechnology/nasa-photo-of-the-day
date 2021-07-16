import React from 'react';
import styled from 'styled-components'

const StyledPicCard = styled.div`
    background-color: #ADD8E6;
    padding: 5%;
    margin: 4%;
    border-radius: 8px;
    box-shadow: 0px 1px 6px -2px #807f7f;

    h2 {
        font-size: 4.5em;
        color: #778899;
    }

    p {
        font-size: 1.8rem;
        color: #4f4f4f;
    }

`

export default function picCard(props) {
    console.log('Make it so!');
    return (
        <StyledPicCard>
            <h2>{props.title}</h2>
            <img src={props.url} alt='Space...the final frontier...' />
            <p>Date: {props.date}</p>
        </StyledPicCard>
    );
}