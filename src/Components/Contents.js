import React from "react";
import "./img.css";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: navy;
  font-weight: 500px;
  text-decoration: underline;
`;

const StyledP = styled.p`
  width: 50%;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

function Contents(props) {
  const { data } = props;
  console.log(props);
  return (
    <div className="contents">
      <StyledH2>{data.title}</StyledH2>
      <StyledP>Date from: {data.date}</StyledP>
      <StyledP>{data.explanation}</StyledP>
    </div>
  );
}
export default Contents;
