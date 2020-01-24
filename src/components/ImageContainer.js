import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5em auto;
  width: 35%;
  min-width: 300px;
  background-size: 100% 100%;
  -webkit-transition: all 1s ease;
  transition: all 0.65ss ease;
`;

const ImageContainer = props => {
  return (
    <div>
      <Container>
        <Header data={props.data} />
      </Container>
    </div>
  );
};

export default ImageContainer;
