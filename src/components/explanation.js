import React from "react"
import styled from 'styled-components'
const ExpStyle = styled.div`
  display: flex;
    justify-content: 'center';
    align-items: 'center';
color: purple;
  font-weight: bold;
  width:86vh;
  display: flex;
  text-align: center;
  margin-left: 28%;
`

export default function Explnation({explanation}){
    return (<ExpStyle>
      <para><p>{explanation}</p></para>
    </ExpStyle>)
    
}