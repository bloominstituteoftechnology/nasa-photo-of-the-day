import React from 'react'
import styled from 'styled-components'

const FooterNav = styled.nav`
margin: 10px;
`;

const FooterLinks = styled.a`
color: #4682B4;
text-decoration: none;
padding: 10px;
`;


function Footer() {
    return (
       <FooterNav>
           <FooterLinks a href="">No Fear Act</FooterLinks>
           <FooterLinks a href="">FOIA</FooterLinks>
           <FooterLinks a href="">Privacy</FooterLinks>
           <FooterLinks a href="">Office of Inspector General</FooterLinks>
           <FooterLinks a href="">Office of Special Counsel</FooterLinks>
           <FooterLinks a href="">Agency Financial Reports</FooterLinks>
           <FooterLinks a href="">Contact NASA</FooterLinks>
       </FooterNav>
    )
}

export default Footer
