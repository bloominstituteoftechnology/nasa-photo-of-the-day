import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
50% {
    transform: scale(0.8);
}
100% {
    transform: scale(1);
    opacity: 1;
}
`

const StyledCard = styled.div`
width: 100%;
display: block;
justify-content: center;
align-items: center;
border-bottom: 2px solid green;
background-color: ${pr => pr.theme.secondaryColor};
color: ${pr => pr.theme.tertiaryColor};

h1 {
    font-size: 4rem;
}

img {
    width: 30%;
}
p {
    color: ${pr => pr.theme.primaryColor};
}
`

const NasaCard = (props) => {
    return (
        <StyledCard>
            <h1>Nasa Card!</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <img src={props.data.url} alt="Nasa photo of the day" />
        </StyledCard>
    )
}

export default NasaCard;