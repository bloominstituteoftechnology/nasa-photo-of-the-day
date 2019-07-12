import React from "react";
import styled from "styled-components";

import rocket from "../assets/rocket.png";

const HeaderDiv = styled.header`
  width: 100%;
  background-color: #0e0e0e;
  color: white;
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Audiowide", cursive;
`;

const LogoLeft = styled.img`
  height: 5rem;
`;

const LogoRight = styled.img`
  height: 5rem;
  transform: scaleX(-1);
`;

const Title = styled.div`
  font-size: 2rem;
`;

function Header() {
  return (
    <>
      <HeaderDiv>
        <LogoLeft src={rocket} alt="rocket" />
        <Title>CosmoScout</Title>
        <LogoRight src={rocket} alt="rocket" />
      </HeaderDiv>
    </>
  );
}

export default Header;
