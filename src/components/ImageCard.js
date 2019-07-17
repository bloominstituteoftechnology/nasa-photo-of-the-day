import React from "react";

export default function ImageCard( {imgURL, imgTitle, imgInfo, imgDate} ) {

  return (
    <div className="imageCard">
      <img src={imgURL} alt="red sun" style={{ maxWidth: "500px" }} />
      <p className="imgTitle"> {imgTitle} </p>
      <p className="imgDate"> {imgDate} </p>
      <p className="imgInfo"> {imgInfo} </p>

    </div>
  );
}
