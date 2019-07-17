import React from "react";

function ImageCard( {imgUrl }) {

  return (
    <div className="imageCard">
      <img src={imgUrl} style={{ maxWidth: "175px" }} />
      <p>Image card </p>
    </div>
  );
}
export default ImageCard;
