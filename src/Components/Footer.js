import React from "react";
import styled from "styled-components";



const FooterWrapper = styled.footer`
  padding:4px;
  background: #3a4454;
  width:80%;
  margin:auto;
`;

const FooterH3 = styled.h3`
    color:aliceblue;
    font-style:italic;
`;

function Footer() {
    return (
      <FooterWrapper>
        <FooterH3>
          Thanks for visitng! Come back tomorrow for a new image.
        </FooterH3>
      </FooterWrapper>
    );
  }
export default Footer;