import React from "react";

function MediaCard(props) {
  console.log(props);

  function cardContent() {
    if (!props.media) {
      return "Loading...";
    } else if (props.media.media_type === "image") {
      return (
        <>
          <img src={props.media.hdurl} alt="media" />
          <p>{props.media.explanation}</p>
        </>
      );
    } else {
      return <p>Not and image!</p>;
    }
  }

  return <div>{cardContent()}</div>;
}

export default MediaCard;
