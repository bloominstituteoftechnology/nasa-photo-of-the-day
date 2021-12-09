import React, { useState, useEffect } from "react";

const Image = (props) => {
  const { nasaURL } = props;
  return (
    <div>
      <img src={nasaURL} alt="Nasa Photo Of The Day" />
    </div>
  );
};
export default Image;
