import React from "react";
import styled from "styled-components";

const StyledImageInfo = styled.div`
  font-family: Arial;
  color: palevioletred;
`;

export default function ImageInfo(props) {
  const { imageInfo } = props;

  return (
    <div className="image-info">
      <StyledImageInfo>
        <p>{imageInfo.title}</p>
        <p>Image Credit and Copyright: {imageInfo.copyright}</p>
        <p>Explanation: {imageInfo.explanation}</p>
      </StyledImageInfo>
    </div>
  );
}
