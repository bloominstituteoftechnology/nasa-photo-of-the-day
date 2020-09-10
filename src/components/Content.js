import React from "react";

export default function Content(props) {
  const { content } = props;

  if (!content) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>{content.title}</h2>
      <h3>{content.date}</h3>
      <p>{content.explanation}</p>
    </div>
  );
}
