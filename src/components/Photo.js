import React from "react";
import Content from "./Content";

export default function Photo(props) {
  const { image } = props;

  if (!image) return <h3>Loading...</h3>;

  return (
    <div className="Photo">
      <img src={image.hdurl} alt="nasa" width="75%"></img>
      <Content content={image} />
    </div>
  );
}
