import React from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 50vh;
`;

const StyledSignature = styled.div`
  background-color: ${pr => pr.theme.background};
  color: ${pr => pr.theme.white};
  padding: 5px;
  margin: 0 auto;
  width: calc(100% - ${pr => pr.theme.space});
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
