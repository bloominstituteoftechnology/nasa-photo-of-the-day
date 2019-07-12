import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  width: 100%;
  background-color: #0e0e0e;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5rem;
  text-align: center;

  p {
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: #f11513;
    }
  }
`;

function Footer() {
  return (
    <>
      <FooterDiv>
        <p>
          API data provided by{" "}
          <a href="https://api.nasa.gov/api.html#apod">NASA</a>. Application
          created by <a href="http://github.com/redirwin">Dave Irwin</a>.
        </p>
      </FooterDiv>
    </>
  );
}

export default Footer;
