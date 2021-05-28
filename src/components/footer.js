import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div `
  text-align: center;
  font-weight: bold;
  padding: 2% 10%;
`

const Footer = props => {

    const { explanation } = props;

    return (
        
            <StyledFooter>
                <p>{explanation}</p>
            </StyledFooter>
        
    )
}

export default Footer;