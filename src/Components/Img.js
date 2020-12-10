import React from "react";
import "./img.css";

function Img(props) {
  const { data } = props;

  return (
    <div>
      <img className="mainPhoto" src={data.url} alt="Photo" />
    </div>
  );
}

export default Img;
