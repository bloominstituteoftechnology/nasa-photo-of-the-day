import React from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
  // background-color: lightgray;
`;

const StyledAnchor = styled.a`
  // width: 100%;
`;

const StyledImage = styled.img`
  width: calc(1000px + ${pr => pr.theme.space});
  margin-bottom: -4px;
  box-shadow: 0 0 ${pr => pr.theme.space} ${pr => pr.theme.black};
`;

const Image = (props) => {

  const { url } = props;

  return (
    <StyledContainer className="Image">
      <StyledAnchor href={url} target='_blank'>
        <StyledImage src={url} alt='NASA' />
      </StyledAnchor>
    </StyledContainer>
  );

};

export default Image;
