import React from "react";
import styled from 'styled-components';

const StyledBody = styled.div`
display: flex;
justify-content: space-evenly;
background-color: gray;
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