import React from "react";
import styled from "styled-components";
import "./Image.css"


const ImgCard = styled.CardImg`
    top: PropTypes.bool,

`;
export default function Image({ src, title }) {

    return (
        <div className="ImageAttrs">
            <img src={src} alt={title}></img>
        </div>
    )
}
