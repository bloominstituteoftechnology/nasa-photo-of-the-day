import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 120px;
  border: 1px blue solid;
  background-color: black;
`;
const StyledH1 = styled.h1`
  width: 60%;
  font-size: 60px;
  font-style: sans-serif;
  font-weight: 900;
  color: royalblue;
  border: 1px black solid;
  text-align: left;
  padding-left: 15px;
`;
// const StyledNav = styled.nav`
//   width: 40%;
//   display: inline-flex;
// `;
// const StyledButtons = styled.button`
//   padding: 10px 10px;
//   margin: 6px;
//   border: 1px royalblue solid;
//   border-radius: 3px;
//   color: black;
//   background-color: white;
// `;

function Header() {
  return (
    <StyledDiv>
      <StyledH1>NASA</StyledH1>
      {/* <StyledNav>
        <StyledButtons>Home</StyledButtons>
        <StyledButtons>Prev P.O.D.</StyledButtons>
      </StyledNav> */}
    </StyledDiv>
  );
}

export default Header;
