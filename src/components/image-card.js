import React from "react";

const ImgCard = props => {
  return (
    <div className="img-card">
        <img alt="Outer Space" src = {props.url} />
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <h3>{props.copyright}</h3>
        <p>{props.explanation}</p>
    </div>
  );
};

export default ImgCard;