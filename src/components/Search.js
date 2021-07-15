import React from 'react'
import styled from "styled-components"

const StyledInput = styled.input`
    font-size: 1rem;
    transition: 300ms;
    margin: 1rem;
    &:focus {
        outline: none;
        font-size: 2rem;
    }
`

export default function Search({ setDate }) {
    return (
      <StyledInput 
      type="date"
      onChange={e => setDate(e.target.value)}
      ></StyledInput>
    )
}
