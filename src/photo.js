import React from 'react';
import "./photo.css";


const Photo = props => {
  return (
      <div>
        {/* {props.info.explanation} */}
        <img className="images" src={props.info.hdurl} alt="Astronomy Pic" />
        <button onClick={() => props.openDetails(props.info.date)}>More Info</button>
      </div>
)
}

export default Photo;