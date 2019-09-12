import React from "react";

const Title = ({ date, ...otherProps }) => (
  <div {...otherProps}>
    <h1>Astronomy Picture of the Day</h1>
    <h4>
      Select date:
      <span>
        <input
          type="date"
          min="12/9/1990"
          max={date || "12-09-2019"}
          onChange={e => {
            console.log(e.target.valueAsDate);
          }}
        />
      </span>
    </h4>
  </div>
);

export default Title;
