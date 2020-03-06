import React from "react";
import styled from 'styled-components';

const ColorH2 = styled.h2`
    color: white;
    font-family: sans-serif;
    font-size: 1.5rem;
`

const FooterWrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    border-top: dashed;
    background-color: rgb(58, 135, 199);
    margin-top: 10px;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <ColorH2>Burlutsky Web Solutions  ©2019</ColorH2>
        </FooterWrapper>
    );
};

export default Footer;