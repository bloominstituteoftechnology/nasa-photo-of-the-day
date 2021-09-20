import React from "react";
import styled from "styled-components";
import MediaContainer from "./Components/MediaContainer/MediaContainer";
import "./App.css";
import PageTitle from "./Components/PageTitle/PageTitle";

const WrapperDiv = styled.div`
  margin: auto;
  padding: 10%;
  max-width: 1024px;
  text-align: center;
  background-color: #fbfbfb;
`;

export default function App() {
  return (
    <WrapperDiv>
      <PageTitle />
      <MediaContainer />
    </WrapperDiv>
  );
}
