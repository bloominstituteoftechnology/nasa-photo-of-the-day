import React from "react";
import styled from "styled-components";

import rocket from "../assets/rocket.png";

const HeaderDiv = styled.header`
  width: 100%;
  background-color: #0e0e0e;
  color: white;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 5rem;
`;

const Title = styled.div`
  font-size: 2rem;
`;

function Header() {
  return (
    <>
      <HeaderDiv>
        <Logo src={rocket} alt="rocket" />
        <Title>CosmoScout</Title>
      </HeaderDiv>
    </>
  );
}

export default Header;
