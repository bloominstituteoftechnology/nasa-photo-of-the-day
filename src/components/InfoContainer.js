import React from "react";
import TheDate from "./TheDate";
import PictureExplanation from "./PictureExplanation";

const InfoContainer = props => {
  return (
    <div className="info-container">
      <TheDate date={props.date} />
      <PictureExplanation explanation={props.explanation} />
    </div>
  );
};
export default InfoContainer;