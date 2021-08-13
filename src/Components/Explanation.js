import React from 'react'
import styled from 'styled-components'

const ExpParagraph = styled.p`
    font-size: 20px;
    margin: 0% 25%;
    margin-top: 20px;
    padding: 50px;
    color: white;
    background-color: purple;
    border-radius: 10px;
`

export default function Paragraph({explanation}){
    return <ExpParagraph>{explanation}</ExpParagraph>;
}
