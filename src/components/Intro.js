import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Heading = styled.h2`
  // padding: 0 2rem;
`;

const Paragraph = styled.p`
  text-align: justify;
  // padding: 0 2rem;
`;

function Intro() {
  return (
    <Container>
      <Heading>Welcome to CosmoScout</Heading>
      <Paragraph>
        Thank you for joining us on a visual tour of the cosmos, brought to us
        by NASA. Here you'll see NASA's astronomy image of the day. Below that,
        you can also choose to see past imagery by selecting a previous date.
      </Paragraph>
    </Container>
  );
}

export default Intro;
