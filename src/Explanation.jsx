import React from 'react'
import styled from "styled-components"

const ExplainHeader = styled.div`
background:black;
font-size:20px;
color:white;
`;

export default function Explanation({explanation}) {
    return (
        <ExplainHeader>
             <article className= "explanation">{explanation}</article>
        </ExplainHeader>
    )
}
