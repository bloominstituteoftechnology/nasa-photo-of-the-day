import React from "react"
import styled from 'styled-components'
const ExpStyle = styled.div`
display: flex;
  text-align: center;
color: purple;
  font-weight: bold;
  width:86vh;
  display: flex;
  text-align: center;
  margin-left: 20%;
`
export default function Explnation({explanation}){
    return (<ExpStyle>
        <p>{explanation}</p>
    </ExpStyle>)
    
}