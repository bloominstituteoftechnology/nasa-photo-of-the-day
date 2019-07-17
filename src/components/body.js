import React from "react";

const Body = ({ propsUrl, propsMediaType }) => {

  if(propsMediaType === 'video') {
    return (
      <iframe width='420' height='315'
        src={propsUrl}>
      </iframe>
    )
  }
  else {
    return (
      <img src={propsUrl} />
    )
  }
};

export default Body;
