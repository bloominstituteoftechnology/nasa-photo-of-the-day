import React from "react";

const Title = (props) => {
  return (
    <div className="photoTitle">
      <h1>{props.title}</h1>
      <p>{props.date}</p>
    </div>
  );
};

export default Title;
