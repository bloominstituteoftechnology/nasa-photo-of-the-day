import React from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 50px;
`;

const StyledNav = styled.div`
  background-color: #202020;
  color: #FFFFFF;
  padding: 5px;
  margin: 0 auto;
  width: calc(100% - 10px);
`;

const Nav = () => {

  return (
    <StyledContainer>
      <StyledNav>
        <h1>NASA - APOD</h1>
      </StyledNav>
    </StyledContainer>
  )

}

export default Nav;
