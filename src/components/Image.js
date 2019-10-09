import React from "react";

const Image = (props) => {
  
  return (
    <img className="daily_img" src={props.url} alt='space stars moon planet spacecraft satellite NASA'/>
  );
}

export default Image