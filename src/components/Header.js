import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
	justify-content: space-between;
	align-items: center;
	height: 15vh;
  padding: 0 2rem;
`;  

const Title = styled.h1`
  font-size: 2.7rem;
`;

const ATag = styled.a`
  color: #333;
  font-size: 1.7rem;
  cursor: pointer;
  transition: all 0.2s;
`;


function Header() {
  return (
   
      <HeaderContainer>
       <Title>{`>_nasapod`}</Title>
        <ATag href="https://github.com/rmscrlos/nasa-photo-of-the-day/tree/carlos-ramos"><i className="fab fa-github"></i></ATag>
      </HeaderContainer>
  
  )
}

export default Header
