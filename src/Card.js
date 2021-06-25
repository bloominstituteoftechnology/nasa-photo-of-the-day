import React from 'react'

const Card = ({ text, title, img}) => {

  if (!img) return <h3>Loading...</h3>;

  return (
    <div>
      <h1>{ title }</h1>
      {/* <p>{ text }</p>
      <img src={ img } alt="a fun photo from space"/> */}
    </div>
  )
}

export default Card

