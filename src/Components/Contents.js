import React from "react";
import "./img.css";

function Contents(props) {
  const { data } = props;
  console.log(props);
  return (
    <div className="contents">
      <h2>{props.data.title}</h2>
      <p>Date from: {props.data.date}</p>
      <p>{props.data.explanation}</p>
    </div>
  );
}
export default Contents;
