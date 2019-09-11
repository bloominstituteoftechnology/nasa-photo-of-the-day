import React from "react";

const Details = ({ title, description }) => (
  <div className="detail-text">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Details;
