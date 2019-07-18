import React from "react";
import styled from "styled-components"

const StyledHeader = styled.header`
  color: white;
  margin-top: -20px;
  padding: 20px;
  margin-bottom: 15px;
`;

function Header() {
  return (
    <StyledHeader>
      <p>Astronomy Picture of the Day</p>
      <a className="visitNasa" href="https://www.NASA.gov" target="_blank">Visit NASA</a>
    </StyledHeader>
  )
}

export default Header;
