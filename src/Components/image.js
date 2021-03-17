import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Details from './details'

export default function Image(props) {
  const { data } = props

  return (
  <div className='container'>
  <img src ={data.url} alt ='photo of the day'/> 
  <Details data={data} />
  </div>
  )

}