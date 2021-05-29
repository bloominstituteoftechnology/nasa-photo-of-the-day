import React from 'react';
//import axios from 'axios'
import styled from 'styled-components';

const StyledFooter = styled.div `
  text-align: left;
  
  padding: 1%;
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