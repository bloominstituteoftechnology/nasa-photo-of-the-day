import React from 'react';
import styled from 'styled-components'


const StyledDetails = styled.div`
    background-color: #ADD8E6;
    padding: 5%;
    margin: 4%;
    border-radius: 8px;
    box-shadow: 0px 1px 6px -2px #807f7f;
    
    &:hover {
      transform: scale(1.1);
    }

    h3 {
        font-size: 2rem;
        color: #4f4f4f;
    }
    
    p {
        font-size: 1.5rem;
        color: #4f4f4f;
    }
`

export default function DetailsCard(props) {
    
    return (
        <StyledDetails>
            <h3>Details</h3>
            <p>{props.explanation}</p>
        </StyledDetails>
    );
}