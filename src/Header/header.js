import React from 'react'
import styled from 'styled-components'
const StyledH1 = styled.h1`
    text-decoration: underline;
    transition: .3s;
    &:hover {
        color:white;
        background-color:black;
    }
`
function header () {
    return (
        <StyledH1>Astro Photo of the Day!</StyledH1>
    );
}
export default header