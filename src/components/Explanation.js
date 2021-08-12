import React from "react";
import styled from 'styled-components';

const StyledDetails = styled.div`
    margin: auto;
    width: 85%;
    text-align: center;
`

function Explanation(props) {
    const { explanation } = props;
    
    return (
        <StyledDetails>
            <p>{explanation}</p>
        </StyledDetails>
    )
}

export default Explanation;