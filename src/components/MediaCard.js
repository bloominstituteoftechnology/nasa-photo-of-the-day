import React from "react";
import Loader from "react-loader-spinner";
import Moment from "react-moment";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Text = styled.div`
  padding: 1rem;
  text-align: left;
`;

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
        <img
          src={props.media.hdurl}
          alt="media"
          className="image"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          }}
        />
      );
    } else {
      return (
        <iframe
          src={props.media.url}
          title="video"
          className="video"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          }}
        />
      );
    }
  };

  return (
    <Card>
      <div
        style={{
          position: "relative",
          width: "100%",
          // maxWidth: "500px",
          // maxHeight: "500px",
          height: "0",
          paddingBottom: "80%"
        }}
      >
        {!props.media ? loading() : mediaType()}
      </div>
      <Text>
        <h3>{props.media.title}</h3>
        <span>
          Shared by NASA on{" "}
          <Moment format="MMMM DD, YYYY">{props.media.date}</Moment>
        </span>
        <p>{props.media.explanation}</p>
      </Text>
    </Card>
  );
}

export default MediaCard;
