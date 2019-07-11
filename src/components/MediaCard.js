import React from "react";
import Loader from "react-loader-spinner";

function MediaCard(props) {
  console.log(props);

  function cardContent() {
    if (!props.media) {
      return (
        <>
          <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
          <p>Loading...</p>
        </>
      );
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
