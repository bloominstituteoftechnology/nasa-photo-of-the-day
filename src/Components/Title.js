import React from "react";
import styled from 'styled-components'


// Styled Components are built outside of the component they serve
// Capitalize the Styled Component
// Dont forget semi-colons

const StyledTitle = styled.h1`
    color: #6CCAC7;
    font-weight: bold;

    &:hover {
        color: #218683;
    }
`



const Title = props => {
    const {title} = props
    return (
        <StyledTitle>
            {title}
        </StyledTitle>
    )
}

export default Title