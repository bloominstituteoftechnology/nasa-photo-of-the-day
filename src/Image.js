import React from "react";

export default function Image(props) {
  const { url } = props;

  return <img src={url} />;
}
