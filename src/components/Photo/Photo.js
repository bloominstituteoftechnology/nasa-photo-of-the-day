import React from "react";

export default function Photo (props) {
    const { photo } = props;
    console.log('Photo', photo)
  
    return (
      <div className="photo">
        <img src = {photo}/>
      </div>
    );
  }