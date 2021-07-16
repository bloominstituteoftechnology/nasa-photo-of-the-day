import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1vh 2vw;
`;

const VideoContainer = styled.div`
  width: 50%;
  padding: 25px;
`;

const TextContent = styled.div`
  width: 50%;
  padding: 25px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 50vh;
  border: 0;
  border-radius: 3px;
`;

function Video(props) {
  const { title, explanation, date, url } = props.data;

  if (!url) return <h3> Loading... </h3>;
  return (
    <Container>
      <VideoContainer>
        <Iframe title="Video of the Day" src={url}></Iframe>
      </VideoContainer>

      <TextContent>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{explanation}</p>
      </TextContent>
    </Container>
  );
}

export default Video;
