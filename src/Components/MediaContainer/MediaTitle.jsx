import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  padding-top: 30px;
`;

export default function MediaTitle(props) {
  return <Title>{props.title}</Title>;
}
