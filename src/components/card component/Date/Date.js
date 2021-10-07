import React from "react";
import dateFormat from "dateformat";

export default function Date({ date }) {
  const formattedDate = dateFormat(date, "mmmm, d, yyyy").replaceAll(",", "");

  return <time dateTime={date}>{formattedDate}</time>;
}
