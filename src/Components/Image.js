import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1vh 2vw;
`;

const ImageContainer = styled.div`
  width: 25%;
  padding: 25px;
`;

const TextContent = styled.div`
  width: 50%;
  padding: 25px;
`;

function Image(props) {
  const { title, explanation, date, url } = props.data;

  if (!url) return <h3> Loading... </h3>;

  return (
    <Container>
      <ImageContainer>
        <img style={{ width: "100%" }} src={url} alt="of the day" />
      </ImageContainer>

      <TextContent>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{explanation}</p>
      </TextContent>
    </Container>
  );
}

export default Image;
