import React from "react";

function Body({ title, img, date, description }) {
  return (
    <div className="imageContainer">
      <h2>{title}</h2>
      <p>{date}</p>
      <img src={img} alt={title} />
      <p className="description">{description}</p>
    </div>
  );
}

export default Body;
