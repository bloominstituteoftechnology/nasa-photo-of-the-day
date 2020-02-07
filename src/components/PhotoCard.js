import React from "react";
import styled from "styled-components";

const PStyle = styled.p`
        width: 70%;
        color: blue;
        margin: 0 auto;
`;

function PhotoCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.url} alt = '' />
            <br />
            <PStyle>
                {props.explanation}
            </PStyle>
        </div>
    )
}

export default PhotoCard;