import React from "react";

function Photo(props){
  console.log(props.hdurl);
  return (
   
      <img src={props.image} />
  );
};
export default Photo;