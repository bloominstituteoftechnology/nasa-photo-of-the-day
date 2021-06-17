import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  color: red;
`;

export default function Buttons(props) {
  return (
    <div className="buttonContainer">
      <StyledButton
        onClick={() => props.setCurrentIndex(props.currentIndex - 1)} ///this is how you would do it without destructuring
      >
        {" "}
        Previous Day
      </StyledButton>
      <StyledButton
        onClick={() => props.setCurrentIndex(props.currentIndex + 1)}
      >
        {" "}
        Next Day
      </StyledButton>
    </div>
  );

  //   const previousImg = (img) => {
  //     <button onClick={() => setImg(currentData[index - 1])}>
  //       Previous Day
  //     </button>;

  //     //am I properly importing img and setImg?//Do i need to initialize state again or is it importing over?
  //     //is img the url string, or the individual object, or the array containing all the objects?
  //     //Can I access the index of each one to manipulate it across pages?--that's what I'm trying to do in line 7
  //     //how do I keep the index of the img the consistent across pages?--with state?
  //     //should i create a variable "current day"?
  //   };

  //   const nextImg = (img) => {
  //     <button onClick={() => setImg(img[index + 1])}>Next Day</button>;
  //   };
}
