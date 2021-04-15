import React from "react";

const Body = ( { title, explanation, date } ) => {
  
  return (
    <div>
      <h1>{title}</h1>
      <p>{explanation}</p>
      <p>{date}</p>
    </div>
  );
};

export default Body;
