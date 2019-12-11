import React from "react";

export default function AboveTheFold({ url, date, title, explanation }) {
  // * * * * * DISPLAYS LOADING MESSAGE WHILE DATA IS FETCHING
  if (!url) return <h2>Loading...</h2>

  return (
    <div>
      <p>{date}</p>
      <img src={url} alt="Astronomy of the Day" /><br />
      <b>{title}</b><br />
      <p>{explanation}</p>
    </div>
  );
}