import React from "react";
import styled from 'styled-components';

const StyledBody = styled.div`
display: flex;
justify-content: space-evenly;
background-color: ${props => props.theme.primaryColor};

h2{
color: ${props => props.theme.white};
}
`

const Body = props => {
    const { photo } = props

    return (
        <StyledBody className="body">
            <h2>{photo.explanation}</h2>

        </StyledBody>
    )
}

export default Body;