import React, {useState} from "react";
import './Logo.css';
import styled from 'styled-components'

const StyledLogo = styled.h1`
    background-color: ${props => props.theme.primaryColor};
`

function Logo(){
    const [logoText, setLogoText] = useState('Nasa Photo Of The Day')

    return(
        <StyledLogo>
        {logoText}
        </StyledLogo>
    )
}

export default Logo;