import React from 'react';
import StyledP from "./Story";
import { StyledH2 } from "./Headers";
import "./PhotoCard.css";

function PhotoCard(props) {
    return (
        <div className="photo-card">
            <StyledH2>{props.title}</StyledH2>
            <img src={props.url} />
            <div>{props.date}</div>
            <StyledP>{props.explanation}</StyledP>
        </div>
    )
}

export default PhotoCard;

// <> </> === JSX (rendering)