import React from "react";

function Image({ title, img, date }) {
  return (
    <div className="Photo">
      <h2>{title}</h2>
      <p>{date}</p>
      <img src={img} alt={title} />
    </div>
  );
}

export default Image;
