import React from "react";
import styled from "styled-components";

const Caption = styled.p`
  text-align: left;
  font-size: 18px;
  line-height: 1.8em;
  padding: 20px;
`;

export default function MediaCaption(props) {
  return <Caption>{props.caption}</Caption>;
}
