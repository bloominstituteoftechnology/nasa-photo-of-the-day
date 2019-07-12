import React from "react";
import Loader from "react-loader-spinner";
import Moment from "react-moment";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: "Open Sans", sans-serif;
  line-height: 1.5rem;
  background-color: white;
  color: black;

  @media screen and (max-width: 600px) {
    box-shadow: none;
  }
`;

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 80%;
`;

const Text = styled.div`
  padding: 1rem;

  text-align: left;

  h3 {
    margin: 0;
  }

  p {
    margin-bottom: 0;
  }
`;

function MediaCard(props) {
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
      <Top>
        {!props.media ? (
          <div style={{ margin: "0 auto" }}>
            <p>Loading...</p>
            <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
          </div>
        ) : (
          mediaType()
        )}
      </Top>
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
