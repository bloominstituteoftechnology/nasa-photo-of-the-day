import React from "react";

function Image(props) {
  const { image, error } = props;

  return (

    <div className="image">
      {error && <h1>Error with the request</h1>}
      <h4>{image.title}</h4>
      <a href={image.hdurl}><img src={image.url} alt={image.title} /></a>
      <p>{image.explanation}</p>
        </div>
  );
}

export default Image;