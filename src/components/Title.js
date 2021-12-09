import React from "react";
import styled from "styled-components";

const MyTitle = styled.div`
  width: 80%;
  text-align: center;
  // border: 1px solid black;
  padding: 2rem 1rem;
`;
const Title = (props) => {
  console.log(props);
  const { photo } = props;

  return (
    <MyTitle className="title">
      <h1> {photo.title} </h1>
      <p>{photo.date}</p>
    </MyTitle>
  );
};

export default Title;
