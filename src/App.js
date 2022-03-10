import React from "react";
import Photo from "./components/Photo";
import styled from "styled-components";

const StyledApp = styled.div`
  text-align: center;
  background: rgb(169, 50, 38);
  background: linear-gradient(
    90deg,
    rgba(244, 208, 63) 5%,
    rgba(255, 87, 51) 30%,
    rgba(231, 76, 60) 50%,
    rgba(202, 111, 30) 70%,
    rgba(169, 50, 38) 95%
  );
`;
const StyledH1 = styled.h1`
  color: white;
  padding-top: 20px;
`;

function App() {
  return (
    <StyledApp>
      <StyledH1>NASA Photo of the Day!</StyledH1>
      <Photo />
    </StyledApp>
  );
}

export default App;
