import React from "react";



export default function ImageCard (props) {

  return (
    <div className="imageCard">
    <p className="imgTitle"> {props.imgTitle} </p>
    <p className="imgDate"> {props.imgDate} </p>
    <img className="mainImage" src={props.imgURL} alt="red sun" style={{ maxWidth: "80%" }} />
    <p className="imgInfo"> {props.imgInfo} </p>
    </div>
  );
}
