import React from "react";
import styled from "styled-components";
import logo from "../../images/cool-galaxy.jpg";

const LogoDiv = styled.div`
    margin: 0;
`
const Logo = () => {
    return (
        <LogoDiv className="logo-container">
            <img src={logo} alt="galaxy"/>
        </LogoDiv>
    );
};
export default Logo;