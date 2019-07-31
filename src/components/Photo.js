import React from 'react';

export default function Photo(props) {
  return (
    <img className="nasa-photo" src={props.img} alt="Nasa Picture of the Day" />
  )
}