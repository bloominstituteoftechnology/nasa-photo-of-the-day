import React from "react";

const Center = (props) => {
  const { picAdr } = props;

  return (
    <div className="main-photo-cont">
      <img className="main-img" src={picAdr} alt="NASA photo of day" />
      <div>Description of Photo </div>
    </div>
  );
};

export default Center;
