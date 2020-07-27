import React from "react";

const Apod = props => {
  return (
    <li key={props.date}>
      <h2>Picture of the Day: {props.title}</h2>
      <img src = {props.url} alt = "Apod" width = "1000px"></img>
      <p>{props.explanation}</p>
    </li>
  );
};
export default Apod;
