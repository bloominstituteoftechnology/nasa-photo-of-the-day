import React from 'react';
import styled from 'styled-components';
export default function Footer() {

    const Footer = styled.footer`
        background-color: #034561;
        color: white;
        margin: 0;
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
        font-family: 'Roboto', sans-serif;
        font-weight: 350;
        word-spacing: 3px;
    `;
    return(
    <Footer>
        <FooterSection>
        <FooterSectionP> All information on this webpage is courtesy of NASA.
             For more information you may visit: <FooterSectionA href="https://api.nasa.gov/#apod"> 
             https://api.nasa.gov/#apod</FooterSectionA>.</FooterSectionP>     
        </FooterSection>
    </Footer>
    )
};