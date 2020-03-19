import React from "react";
import styled from "styled-components";

const DailyTitle = ({ titleData }) => {
  const StyledTitleDiv = styled.div`
    font-family: "Baloo 2", cursive;
    margin-top: 5vh
  `;

  console.log(titleData);
  return (
    <h1>
      <StyledTitleDiv>{titleData}</StyledTitleDiv>
    </h1>
  );
};

export default DailyTitle;
