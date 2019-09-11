import React from "react";

const Title = ({ date, ...otherProps }) => (
  <div {...otherProps}>
    <h1>Astronomy Picture of the Day</h1>
    <h4>{date}</h4>
  </div>
);

export default Title;
