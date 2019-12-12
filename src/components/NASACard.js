import React from "react";

const NASACard = props => {
  return(
   <div className="NASACard">
     <h2>Title: {props.title}</h2>
     <img className="NASAIMG" alt="random NASA" src={props.imgURL} />
      <p className="explanation"> Explanation: {props.explanation}</p>
      <p className="date">Date: {props.date}</p>
   </div>
  );
};

export default NASACard;