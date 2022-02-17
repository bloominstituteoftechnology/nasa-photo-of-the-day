import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    100% {
        opacity: 1;
        transform: scale(1) rotateZ(0);
    }
`

const StyledDetails = styled.div`
    opacity: 0;
    transform: scale(2) rotateZ(180deg);
    animation: ${kf} 0.5s ease-in-out forwards
`

const NasaPhoto = (props) => {
    return (
        <StyledDetails className="nasa-photo">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.data}</p>
            <img src={props.photo.hdurl} />
            <p className="explanation"> {props.photo.explanation}</p>
        </StyledDetails>
    )
}

export default NasaPhoto;