import React from "react"
import styled from 'styled-components'

const StyledTitle = styled.div`

color: blue;
  font-size: .8rem;

`
export default function Title({title}){
    
    return (<StyledTitle> 
        <h1>{title}</h1> 
        </StyledTitle>)
}