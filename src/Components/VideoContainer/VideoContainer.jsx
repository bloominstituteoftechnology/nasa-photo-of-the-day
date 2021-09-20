import React from "react";
import styled from "styled-components";

const VideoWrapper = styled.iframe`
  width: 70%;
  height: 600px;
  border: none;
  padding: 10px 0;
`;

export default function VideoContainer(props) {
  const { video } = props;
  return <VideoWrapper src={video.url}></VideoWrapper>;
}
