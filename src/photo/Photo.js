/** @format */

import React from "react";

const Photo = (props) => {
  console.log(props.photo);
  if (!props.photo) return <h3>Loading...</h3>;
  return (
    <div className="photo">
      <img src={props.photo.hdurl} alt={props.photo.explanation} />
      <p>Title: {props.photo.title} </p>
      <p>Description: {props.photo.explanation} </p>
      <p>Date: {props.photo.date}</p>
      <p>Copyright: {props.photo.copyright}</p>
    </div>
  );
};

export default Photo;
