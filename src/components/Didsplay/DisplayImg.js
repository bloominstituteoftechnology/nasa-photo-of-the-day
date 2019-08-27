import React from "react";

const DisplayImg = props => {
  return (
    <div className="container">
        <div className="info">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
        
        <div className="img-container">
            <img src={props.imgSrc} />
        </div>
      
    </div>
  );
};

export default DisplayImg;
