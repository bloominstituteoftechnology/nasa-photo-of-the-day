import React from "react";
import styled from 'styled-components'

// Styled Components are built outside of the component they serve
// Capitalize the Styled Component
// Dont forget semi-colons



const StyledSummary = styled.div`
    color: #6CCAC7;

    &:hover {
        color: #218683;
    }
`

const Summary = props => {
    const {summary} = props
    return (
        <StyledSummary>
            {summary}
        </StyledSummary>
    )
}

export default Summary;