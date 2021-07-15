import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
    font-size: 20px;
    margin: 0% 25%;
    padding-top: 0px;
    padding-bottom: 50px;
    padding-right: 50px;
    padding-left: 50px;
    /* border-radius: 25px; */
    color: white;
    background-color: darkgray;
`

export default function Paragraph({explanation}){
    return <StyledParagraph>{explanation}</StyledParagraph>;
}