import React from "react"
import styled from "styled-components";

const StyledImage = styled.img `
    margin-bottom: 1vh;
    border-bottom: 1px solid grey;
`

export default function Img(props) {
    console.log(props);

    return (
        <div className="Img">
        <StyledImage img src={props.url} alt={props.alt}/>
        </div>
    )
}

