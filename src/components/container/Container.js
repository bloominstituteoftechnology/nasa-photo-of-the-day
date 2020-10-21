import React, {useState} from 'react'
import Image from "./ImgContainer";
import Content from "./Content";


const Container = props => {
  return (
    <div className="container">
      <Image imgUrl={props.nasaData.url}/>
      <Content content={props.nasaData}/>
    </div>
  )
}

export default Container
