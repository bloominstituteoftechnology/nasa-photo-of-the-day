import React from "react";
import "../App.css";

function Apodinfo(props) {
  return (
    <div>
      <h6 style={{ textDecoration: `underline`, color: `skyblue` }}>
        Astronomy Picture of the Day
      </h6>
      <h1>{props.title}</h1>
      <p className='date'> {props.date} </p>
      <p>{props.info}</p>
    </div>
  );
}

export default Apodinfo;
