import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div `
    background : skyblue;
    opacity: .5;

   
`


function Header(props) {
    return (
        <StyledHeader>
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
        </StyledHeader>
    )
}

export default Header