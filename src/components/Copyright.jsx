import React from "react";
import styled from "styled-components";

const Copyright = ({ copyrightData }) => {
  console.log(copyrightData);

  const StyledSmall = styled.small`
    text-align: left;
    display: block;
    margin-left: 10px;
  `;

  return (
    <>
      <StyledSmall>{copyrightData}</StyledSmall>
    </>
  );
};

export default Copyright;
