import React from "react";

const Photo = (props) => {
  const { photo } = props;

  return (
    <div className="photo">
      <img src={photo.hdurl} alt="space" />
    </div>
  );
};

export default Photo;
