import React, { useState } from "react";
import { img, setImg } from "./img";

export default function TextContainer(props) {
  console.log("this is the text props", props);
  const { nasaData, currentIndex } = props;
  return (
    <div className="textContainer">
      <h3>{nasaData[currentIndex].title}</h3>
      <h4>{nasaData[currentIndex].date}</h4>
      <p>{nasaData[currentIndex].explanation}</p>
    </div>
  );
}
