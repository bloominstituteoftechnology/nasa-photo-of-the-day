import React from "react"
import styled from 'styled-components'
const ExpStyle = styled.div`
color: purple;
  font-weight: bold;
`
export default function Explnation({explanation}){
    return (<ExpStyle>
        <p>{explanation}</p>
    </ExpStyle>)
    
}