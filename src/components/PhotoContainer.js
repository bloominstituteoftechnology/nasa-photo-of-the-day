import React from "react";
import Button from "./Button";

export default function PhotoContainer(props) {
  return (
    <div className="photo-container">
      <div className="photo">
        <img src={props.props.hdurl} alt="Astronomy"></img>
        {console.log(props.props)}
      </div>
      <div className="description">
        <h1>{props.props.title}</h1>
        <h5>{props.props.date}</h5>
        <p>{props.props.explanation}</p>
        <Button />
      </div>
    </div>
  );
}
