import React from "react";
import Loader from "react-loader-spinner";
import Moment from "react-moment";
import { Image, Container, Grid } from "semantic-ui-react";

function MediaCard(props) {
  const loading = () => {
    return (
      <>
        <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
        <p>Loading...</p>
      </>
    );
  };

  const mediaType = () => {
    if (props.media.media_type === "image") {
      return (
        <Image src={props.media.hdurl} alt="media" className="image" fluid />
      );
    } else {
      return <iframe src={props.media.url} title="video" height="100%" />;
    }
  };

  return (
    <div className="card-container">
      {!props.media ? loading() : mediaType()}
      <h3>{props.media.title}</h3>
      <span>
        Shared by NASA on{" "}
        <Moment format="MMMM DD, YYYY">{props.media.date}</Moment>
      </span>
      <p>{props.media.explanation}</p>
    </div>
  );
}

export default MediaCard;
