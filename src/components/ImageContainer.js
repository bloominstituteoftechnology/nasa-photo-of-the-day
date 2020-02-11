import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5em auto;
  width: 40%;
  @media (max-width: 800px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
  background-size: 100% 100%;
  -webkit-transition: all 1s ease;
  transition: all 0.65ss ease;
`;

const ImageContainer = ({ data }) => {
  return (
    <div>
      <Container>
        <Header data={data} />
      </Container>
    </div>
  );
};

export default ImageContainer;
