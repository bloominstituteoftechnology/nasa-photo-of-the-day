import React from 'react';
import StyledP from "./Story";
import { StyledH1 } from "./Headers";
import "./PhotoCard.css";

function PhotoCard(props) {
    return (
        <div className="photo-card">
            <StyledH1>{props.title}</StyledH1>
            <img src={props.url} />
            <div>{props.date}</div>
            <StyledP>{props.explanation}</StyledP>
        </div>
    )
}

export default PhotoCard;

// <> </> === JSX (rendering)