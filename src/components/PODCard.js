import React from 'react';

const PODCard = props => {
  console.log(props);
  return (
    <div className="photo-info" key={props.url}>
      <img className="podImg" alt="NASA Photo of the Day" src={props.url}></img>
      <h3>Date: {props.date}</h3>
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
      
      <h3>Copyright: {props.copyright}</h3>
    </div>
  );
};

export default PODCard;
