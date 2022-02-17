import React from "react";
import styled, { keyframes } from "styled-components"

const kf = keyframes `
100% {
    opacity:1;
    transform: scale(1) rotateZ(0);
}
`
//  Next two lines were within StyledMediaDiv, but wouldn't change anything.
//  color: ${pr => pr.theme.primaryColor};
//     background-color: ${props => props.theme.white};
const StyledMediaDiv = styled.div`



img {
    opacity: 0;
    max-width: 80%;
    height: auto;
    transform: scale(0) rotate(360deg);
    animation: ${kf} 1s ease-in-out forwards;
}

`


const NasaVideo = (props) => {
    return (
        <StyledMediaDiv className="apod-wrapper">
            <h1>{props.video.title}</h1>
            <p>{props.video.date}</p>
            <div className="Nasa-media">
                {props.video.media_type === "video" ? 
                ( <iframe title="apod-video" width="853" height="480" src={props.video.url}/>
                ) : ( <img src={props.video.url} alt='Nasa selection of the day'/>
                )}
            </div>
            <p>{props.video.explanation}</p>
        </StyledMediaDiv>
    )
}

export default NasaVideo