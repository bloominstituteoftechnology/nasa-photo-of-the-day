import React from "react";

const Image = ({ picOfTheDay }) => {
  return (
    <div className="pic">
      <img src={picOfTheDay} alt={"pic of the day"}></img>
    </div>
  );
};

export default Image;
