import React from "react";


export default function NasaImagecard(props) {
     return (
    <div>
        
                <h1>{props.nasaData.title}</h1>
      <h4>{props.nasaData.date}</h4>
        <img src={props.nasaData.hdurl} alt="NASA iotd"/>
      <h2>{props.nasaData.explanation}</h2>
    </div>
  );
}
