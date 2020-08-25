import React from "react";

const NasaCard = (props) => {
  return (
    <div>
      <h1>Title:{props.data.title}</h1>
      <h3>Date : {props.data.date}</h3>
      <img src={props.data.hdurl} alt ={props.data.title}/>
      <p> Explanation: {props.data.explanation} </p>
    </div>
  );
};

export default NasaCard;
