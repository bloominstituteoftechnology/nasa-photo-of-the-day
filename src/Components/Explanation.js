import React, { useState } from 'react';
import styled from 'styled-components';


const StyledExplanation = styled.div`
    color: ${props => props.theme.primaryColor};
    p {
        &:hover {
            color: ${props => props.theme.hoverColor}
        }
    }
`

const Explanation = props => {

    const { nasaExplanation, nasaImageTitle } = props;

    return (
        <StyledExplanation>
            <h3>
                {nasaImageTitle}
            </h3>
            <p className="photoInfo">
                {nasaExplanation}
            </p>
        </StyledExplanation>
    )
}

export default Explanation;