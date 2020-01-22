import React from "react";

export default function NasaImagecard(props) {
  return (
    <div>
        <h2>CARD</h2>
        <h4>{props.nasaData.title}</h4>
        <img src={props.nasaData.hdurl} alt="NASA iotd"/>
      <h4>{props.nasaData.date}</h4>
      <h2>{props.nasaData.explanation}</h2>
    </div>
  );
}
