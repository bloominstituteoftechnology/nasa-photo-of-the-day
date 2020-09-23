import React, {useState} from "react";

function Photo(props) {
  return (
    <div className="photoCon">
      <img src={props.hdurl} alt={props.explanation}/>
      <p>Date: {props.date}</p>
      <p>Copyright: {props.copyright}</p>
      <p>{props.explanation}</p>
    </div>
  )
}

export default Photo;
