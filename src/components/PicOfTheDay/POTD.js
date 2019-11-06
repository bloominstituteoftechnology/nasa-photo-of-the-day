import React from "react";

export default function POTD(props) {
  console.log(props.img);
  
  return (
  <div>
    <img className="POTD-img" alt="NASA's photo of the day" src={props.img}/>
  </div>
  );
} 