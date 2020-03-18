import React from "react";

const Image = props => {
  return (
    <div className="img-of-day">
      <img alt={props.alt} src={props.url} />
    </div>
  );
};
export default Image;