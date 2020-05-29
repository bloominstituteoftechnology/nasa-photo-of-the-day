import React from "react"
import styled from 'styled-components'

export default function ExplanationElement(props) {
    const StyledP = styled.p`
    display: flex;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    padding-top: 3.5%;
    padding-bottom:2.5%;
    
    `
    return (
    <StyledP>Explanation: <br/>{props.info}</StyledP>
    )
}