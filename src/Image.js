import React from "react";

function Image({ title, img, date }) {
  return (
    <div className="imageContainer">
      <h2>{title}</h2>
      <p>{date}</p>
      <img className="photo" src={img} alt={title} />
    </div>
  );
}

export default Image;
