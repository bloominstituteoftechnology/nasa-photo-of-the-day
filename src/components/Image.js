import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const ImageContainer = styled.div`
  max-width: 100%;

  img {
    width: 100%;
  }
`;

export default function Description(props) {
  const { src, alt, media_type } = props;
  return (
    <ImageContainer>
      {media_type === "image" && <img src={src} alt={alt}></img>}
      {media_type === "video" && (
        <ReactPlayer url={src} width="100%" controls={true} />
      )}
    </ImageContainer>
  );
}
