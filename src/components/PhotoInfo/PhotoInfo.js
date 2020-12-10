import React from "react";

export default function PhotoInfo(props) {

    const { info } = props;
  
    return (
      <div className="header">
        <p><span style={{fontWeight:"bold" }}>Photo Explanation: </span>
        {info}</p>
      </div>
    );
  }