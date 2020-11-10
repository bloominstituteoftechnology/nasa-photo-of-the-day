import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
`;

const ImageSize = styled.img`
  width: 100%;
`;

function ImageContainer(props) {
  const { image } = props;
  return (
    <ImageWrapper>
      <ImageSize src={image.url} alt={image.desc} />
    </ImageWrapper>
  );
}

export default ImageContainer;
