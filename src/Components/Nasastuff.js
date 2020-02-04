import React from "react";

  const NasaCard = props => {
    return (
      <div className="card" key={props.id}>
        <img className="card-image" alt="NASA Image of the Day" src={props.imgUrl} />
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p>{props.explanation}</p>
      </div>
    );
  };
 export default NasaCard;

 