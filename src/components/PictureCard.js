import React from "react";
import { alert } from "reactstrap";

const pictureCard = props => {
  return (
    <div className="picture-list">
      <img className="picture-image" alt="photo-ofday" src={props.imgUrl} />
      <p>{props.explanation}</p>
    </div>
  );
};

export default PictureCard;
