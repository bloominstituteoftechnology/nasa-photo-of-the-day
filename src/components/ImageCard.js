import React from "react";

const ImageCard = props => {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <img className="nasaImg" alt="Nasa's photo of the day!" src={props.data.url}/>
      <p></p>
    </div>
  )
}

export default ImageCard;