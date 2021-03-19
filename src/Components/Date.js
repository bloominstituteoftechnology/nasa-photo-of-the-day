import React from "react";
import styled from 'styled-components'

// Styled Components are built outside of the component they serve
// Capitalize the Styled Component
// Dont forget semi-colons


const StyledDate = styled.div`
    color: #6CCAC7;

    &:hover {
        color: #218683;
    }
`


const DateImg = props => {
    const {date} = props
    return (
        <h3>
            <StyledDate>
                {date}
            </StyledDate>
            
        </h3>
    )
}

export default DateImg;