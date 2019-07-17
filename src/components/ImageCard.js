import React from "react";

export default function ImageCard( {imgURL} ) {

  return (
    <div className="imageCard">
      <img src={imgURL} style={{ maxWidth: "500px" }} />
      {/*<p> {imgTitle} </p>*/}

    </div>
  );
}
