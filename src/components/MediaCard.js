import React from "react";

function MediaCard(props) {
  console.log(props);
  return (
    <div>
      <img src={props.media.hdurl} alt="media" />
      <p>{props.media.explanation}</p>
    </div>
  );
}

export default MediaCard;
