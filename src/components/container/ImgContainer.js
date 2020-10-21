import React from 'react'

const ImgContainer = props => {
  return (
    <div className="img__container item__container">
      <img src={props.imgUrl} alt="random img"/>
    </div>
  )
}

export default ImgContainer
