import React from "react";
import styled from 'styled-components'

// Styled Components are built outside of the component they serve
// Capitalize the Styled Component
// Dont forget semi-colons


const StyledCopyright = styled.h4`
    color: #6CCAC7;

    &:hover {
        color: #218683;
    }
`

const Copyright = props => {
    const {copyright} = props
    return (
        <StyledCopyright>
            {copyright}
        </StyledCopyright>
    )
}

export default Copyright;