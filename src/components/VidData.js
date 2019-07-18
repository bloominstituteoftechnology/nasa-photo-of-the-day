import React from "react";

export default function VidData(props) {
  return (
    <iframe
      src={props.passData.url}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
    />
  );
}

// <iframe src="https://www.w3schools.com"></iframe>
