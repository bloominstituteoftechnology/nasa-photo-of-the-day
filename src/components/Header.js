import React from "react";
import styled from "styled-components"

const StyledHeader = styled.header`
  color: white;
  margin-top: -20px;
  padding: 20px;
  margin-bottom: 15px;
`;

const StyledVisitNasa = styled.a`
  color: white;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
`;

function Header() {
  return (
    <StyledHeader>
      <p>Astronomy Picture of the Day</p>
      <StyledVisitNasa href="https://www.NASA.gov" target="_blank">Visit NASA</StyledVisitNasa>
    </StyledHeader>
  )
}

export default Header;
