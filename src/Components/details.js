import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";


export default function Details(props) {
  const { data } = props

  return (
    <div className='container'>
      <h2>{data.title}</h2>
      <p>{data.explanation}</p>
    </div>
)  

}