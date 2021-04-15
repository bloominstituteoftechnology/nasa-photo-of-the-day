import React from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 50vh;
`;

const StyledSignature = styled.div`
  background-color: #202020;
  color: #FFFFFF;
  padding: 5px;
  margin: 0 auto;
  width: calc(100% - 10px);
  margin-top: 50px;
`;

const Footer = () => {

  return (
    <StyledContainer>
      <StyledSignature>
        <p>Copyright © Hugo Orozco • 2021</p>
      </StyledSignature>
    </StyledContainer>
  )

}

export default Footer;
