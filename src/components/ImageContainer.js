import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  background-size: 100% 100%;
  border-radius: 8px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-transform: scale(0.3, 0.3);
  transform: scale(0.3, 0.3);

  span {
    color: green;
    text-shadow: 1px 2px 1px #000;
  }
  h3 {
    opacity: 0.5;
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
    color: #fff;
  }
  p {
    opacity: 0.2;
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
    color: #fff;
  }
  .copy {
    opacity: 0.2;
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
    color: red;
  }

  &:hover {
    box-shadow: 0 40px 130px rgba(0, 0, 0, 0.6);
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    h3 {
      opacity: 1;
      -webkit-transition: all 1s ease;
      transition: all 1s ease;
      text-shadow: 1px 2px 1px #000;
    }
    p {
      opacity: 1;
      -webkit-transition: all 1s ease;
      transition: all 1s ease;
      text-shadow: 1px 2px 1px #000;
    }
    .copy {
      opacity: 1;
      -webkit-transition: all 1s ease;
      transition: all 1s ease;
      color: red;
      text-shadow: 1px 2px 1px #000;
    }
  }
`;

const ImageContainer = props => {
  return (
    <Container
      style={{
        backgroundImage: `url(${props.data.url})`
      }}
    >
      <Header data={props.data} />
    </Container>
  );
};

export default ImageContainer;
