import React from 'react'
import styled from 'styled-components'


const Explanation = ({explanationData}) => {
    console.log(explanationData);
    
    const StyledParagraph = styled.p`
    margin: 2vh;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    
    `

    return (
        <>
           <StyledParagraph> {explanationData} </StyledParagraph>
        </>
    )
}

export default Explanation


