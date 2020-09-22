import React from "react";
import "../card.css";

function Card({ props }) {
  const { copyright, date, explanation, title, url } = props;

  if (!props) return <h3>Loading...</h3>;

  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>{date}</h3>
      <img src={url} alt="nasa" />
      <p>Copyrights: {copyright}</p>
      <p>{explanation}</p>
    </div>
  );
}

export default Card;
