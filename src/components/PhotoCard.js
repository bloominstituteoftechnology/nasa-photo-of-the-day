import React from 'react';

const PhotoCard = (props) => {
//   console.log(props);

  if(!props) return <h3>Loading...</h3>
  return (
    <>
      <h2>{props.title}</h2>
      <img width='80%vw' src={props.photoUrl} alt={props.title} />
      <p>
        <strong>Description: </strong>
        {props.description}
      </p>
      <footer>
        <p>
          <strong>Copyright: </strong>
          <em>{props.copyright}</em>
        </p>
      </footer>
    </>
  );
};

export default PhotoCard;
