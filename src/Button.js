import React, {useState} from "react";
import "./Button.css";
import styled from 'styled-components';

const StyledButton = styled.button`
    display: block;
    width: 30%;
    height: 30px;
    margin: 0 auto;
`

const StyledCtaButton = styled.button`
    width: 80%;
    height: 30px;
    border-radius: 12px;
    background-color: ${props => props.theme.secondaryColor};
    margin: 5px 0 5px 0;
`

function Button(props){
    const [button, setButton] = useState(props.btnText || 'login');
    const [buttonClass, setButtonClass] = useState(props.btnClass ||'login-btn');

    if(button === 'Get Started'){
        return <StyledCtaButton className={buttonClass}>{button}</StyledCtaButton>
    }

    return(
        <StyledButton className={buttonClass}>{button}</StyledButton>
        
        
    )
}

export default Button;