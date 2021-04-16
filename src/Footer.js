import React from 'react';
import styled from 'styled-components';



export default function Footer() {

    const Footer = styled.footer`
    background:
        linear-gradient(red, transparent),
        linear-gradient(to top left,#009432, transparent),
        linear-gradient(to top right, #fa983a, transparent);
        background-blend-mode: screen;
    color: white;
    margin: 5%;
    `;
    const FooterSection = styled.div`
        width: 800px;
        margin: 0 auto;
        padding: 10px;
    `;
    const FooterSectionA = styled.a`
        color: #94cbe2;
    `;
    const FooterSectionP = styled.p`
        text-align: center;
        font-family:  sans-serif;
        font-weight: 350;
        word-spacing: 3px;
    `;
    return(
    <Footer>
        <FooterSection>
        <FooterSectionP href="https://api.nasa.gov/#apod"> All information on this webpage is courtesy of NASA.
             For more information you may visit: 
             https://api.nasa.gov/#apod
        </FooterSectionP>     
        </FooterSection>
    </Footer>
    )
};