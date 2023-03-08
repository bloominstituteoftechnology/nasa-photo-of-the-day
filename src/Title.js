import React from "react";
import styled from "styled-components";

const HeadingColor = styled.div`
  color: white;
  text-align: center;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgba(10, 60, 145, 0.5);
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

function Title() {
  return (
    <HeadingColor>
      Welcome To NASA's Photo of the Day
      <h5 style={{ textAlign: "center", fontSize: "25px", color: "white" }}>
        By Aaron Belmore
      </h5>
    </HeadingColor>
  );
}

export default Title;
