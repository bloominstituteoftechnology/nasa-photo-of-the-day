import React from "react";

const Display = (props) => {
  const { date, title, url, explain } = props;

  return (
    <div className="displayDiv">
      <h1>{title}</h1>
      <h2>{date}</h2>
      <img src={url} alt="space" />
      <p>{explain}</p>
    </div>
  );
};
// function Display({nasaData}) {
// //    const {date, url, title, explain} = props;

//     return (
//     <div>
//         <p>{date}</p>
//     </div>);
// }

export default Display;
