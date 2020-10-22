import React from "react";
import "./body.css";

function Body(props) {
  return (
    <div className="body">
      <div className="body__left">
        <h2>{props.passedInfo.copyright}</h2>
        <h3>{props.passedInfo.date}</h3>
        <p>{props.passedInfo.explanation}</p>
      </div>
      <div className="body__right">
        <img src={props.passedInfo.hdurl} />
      </div>
    </div>
  );
}

export default Body;
