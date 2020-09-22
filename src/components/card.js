import React from "react";
import "../card.css"

function Card({props}) {

  const {
    copyright,
    date,
    explanation,
    title,
    url,
  } = props;



  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>{date}</h3>
      <img src={url} />
      <p>Copyrights: {copyright}</p>
      <p>{explanation}</p>
    </div>
  );
}

export default Card;
