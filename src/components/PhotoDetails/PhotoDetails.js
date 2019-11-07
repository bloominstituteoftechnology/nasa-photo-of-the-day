import React from "react";

export default function PhotoDetails (props) {
  
  return (
    <div className="photo-details-container">
      <p className="title">{props.title}</p>
      <p className="date">{props.date}</p>
      <p className="explanation">{props.explanation}</p>
    </div>
  )
}