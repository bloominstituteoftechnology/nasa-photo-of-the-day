import React from "react"
import styled from "styled-components";

const Styledh1 = styled.h1 `
    color: teal;
`

export default function Header(props) {
    console.log(props);
    return (
        <div className="Header">
        <Styledh1>{props.title}</Styledh1>
        </div>
    )
}

