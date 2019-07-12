import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5rem;
`;

const Paragraph = styled.p`
  text-align: justify;
  padding: 0rem;
  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

function Intro() {
  return (
    <Container>
      <Paragraph>
        Thank you for joining us on a visual tour of the cosmos, brought to you
        by NASA and Dave Irwin, a web and application developer creating cool
        things. Here you'll see NASA's astronomy image of the day. Or, pick a
        previous date and view the image or video from that date in history.
      </Paragraph>
    </Container>
  );
}

export default Intro;
