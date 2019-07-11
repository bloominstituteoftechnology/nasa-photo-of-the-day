import React from "react";
import Loader from "react-loader-spinner";
import Moment from "react-moment";

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
        <img src={props.media.hdurl} alt="media" className="image" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}/>
      );
    } else {
      return <iframe src={props.media.url} title="video" className="video" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}/>;
    }
  };

  return (
    <div columns={2}  className="card-container" style={{padding: "1rem"}}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            paddingBottom: "80%"
          }}
        >
          {!props.media ? loading() : mediaType()}
        </div>
      <div style={{padding: "0 1rem"}}>
        <h3>{props.media.title}</h3>
        <span>
          Shared by NASA on{" "}
          <Moment format="MMMM DD, YYYY">{props.media.date}</Moment>
        </span>
        <p>{props.media.explanation}</p>
        </div>
    </div>
  );
}

export default MediaCard;
