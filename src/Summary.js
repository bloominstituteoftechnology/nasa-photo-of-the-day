import React from "react";
import styled from 'styled-components'


const StyledSummary = styled.p`
    margin: 3% 3%;
`

function Summary( { nasaData } ){

    console.log(nasaData)

    return(
        <StyledSummary>{nasaData.explanation}</StyledSummary>
    )
}

export default Summary;