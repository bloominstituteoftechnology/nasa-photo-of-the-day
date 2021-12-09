import React from "react";

const Information = (props) => {
  const { photo } = props;

  return <div className="information">{photo.explanation}</div>;
};

export default Information;
