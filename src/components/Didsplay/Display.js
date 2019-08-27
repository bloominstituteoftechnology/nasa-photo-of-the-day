import React from "react";
import DisplayImg from "./DisplayImg";

const Display = props => {
  return (
    <>
      <DisplayImg 
      imgSrc={props.imgSrc} 
      title={props.title} 
      description={props.description} />
    </>
  );
};
export default Display;
