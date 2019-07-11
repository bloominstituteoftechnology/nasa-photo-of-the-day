import React from "react";
import Loader from "react-loader-spinner";
import Moment from "react-moment";

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
        <div className="media-container">
          <img src={props.media.hdurl} alt="media" className="image" />
        </div>
      );
    } else if (props.media.media_type === "video") {
      return (
        <div className="media-container">
          <iframe
            src={props.media.url}
            title={props.media.title}
            className="video"
          />
        </div>
      );
    }
  }

  return (
    <div className="card-container">
      {cardContent()} <h3>{props.media.title}</h3>
      <span>
        Shared by NASA on{" "}
        <Moment format="MMMM DD, YYYY">{props.media.date}</Moment>
      </span>
      <p>{props.media.explanation}</p>
    </div>
  );
}

export default MediaCard;
