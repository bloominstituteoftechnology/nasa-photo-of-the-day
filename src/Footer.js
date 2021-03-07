import React from 'react';
import styled from 'styled-components';
import theme from "./Theme";


export const FooterText = styled.div`
text-decoration: underline;
background-image: url('https://i.pinimg.com/originals/65/9a/8f/659a8fef2fd8f4e46d412719046f8a85.jpg');
color: ${props => props.theme.white};
`

export default function Footer(props){
    
    return (
        <FooterText>
            <p>{props.footer}</p>
        </FooterText>
    )

    }
    