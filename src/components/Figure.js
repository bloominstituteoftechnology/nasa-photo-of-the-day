import React from "react";

const Figure = ({ imgUrl, copyright, title }) => (
  <figure>
    <img src={imgUrl} alt={title} />
    <figcaption>
      {title} | &copy; {copyright}
    </figcaption>
  </figure>
);

export default Figure;
