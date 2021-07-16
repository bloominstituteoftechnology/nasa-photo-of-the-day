import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5vh 2vw;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  h1 {
    margin-left: 1vw;
    color: ${props => props.theme.primaryColor};
    font-size: 2.25rem;
    font-weight: 500;
    line-height: 1;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;

  h1{
      color: ${props => props.theme.primaryColor};
      font-weight: 400;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img id="header-logo" src="NASA.png" alt="NASA Logo" />
        <h1>
          {" "}
          Picture of <br /> The Day
        </h1>
      </HeaderLeft>
      <HeaderRight>
        <h1>Gallery</h1>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
