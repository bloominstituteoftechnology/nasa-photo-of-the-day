import React from "react";
import styled from "styled-components";

const Body = styled.div`
  width: 80%;
`;

const Information = (props) => {
  const { photo } = props;

  return <Body className="information">{photo.explanation}</Body>;
};

export default Information;
