import React from "react";
import styled from "styled-components";

const StyledPara = styled.p`
    padding: 5%;
`

export default function Text(props) {
    console.log(props);

    return (
        <div className="Text">
        <StyledPara>{props.text}</StyledPara>
        </div>
    )
}