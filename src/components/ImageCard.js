import React from "react";

export default function ImageCard( {imgURL, imgTitle, imgInfo, imgDate} ) {

  return (
    <div className="imageCard">
    <p className="imgTitle"> {imgTitle} </p>
    <p className="imgDate"> {imgDate} </p>
    <img className="mainImage" src={imgURL} alt="red sun" style={{ maxWidth: "360px" }} />
    <p className="imgInfo"> {imgInfo} </p>
    </div>
  );
}
