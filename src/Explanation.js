import React from 'react';
import styled from 'styled-components';
import './theme';

const StyledExplanation = styled.div`
    // ! Theme styles
    background-color: ${props => props.theme.primaryColor};
    h4{
        color: ${props => props.theme.tertiaryColor}
    }
    p{
        color: ${props => props.theme.secondaryColor};
        background-color: ${props => props.theme.primaryColor};
    }

    //! Media query
    @media ${props => props.theme.breakpointMobile}
`

const Explanation = (props) => {
    const { explanation, color } = props

    return (
        <StyledExplanation color={color}>
            <h4>-----------Explanation----------</h4>
                <p> {explanation} </p>
            <h4>--------------------------------</h4>
        </StyledExplanation>
    );
}


export default Explanation