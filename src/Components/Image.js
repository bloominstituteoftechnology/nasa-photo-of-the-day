import React from "react";

export default function Image({ src, title }) {

  return (
    <div className='ImageClass'>
      <img src={src} alt={title}></img>
    </div>
  )
}