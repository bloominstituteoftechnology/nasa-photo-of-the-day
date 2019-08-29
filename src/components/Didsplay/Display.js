import React from "react";
import DisplayImg from "./DisplayImg";

const Display = props => {
  return (
    <>
      <DisplayImg 

      imgSrc={props.imgSrc} // here is the image url 

      title={props.title}  // here is the title <h1>
      description={props.description} />
    </>
  );
};
export default Display;
