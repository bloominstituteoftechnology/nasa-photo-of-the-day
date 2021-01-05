import React from "react";

export default function   AstronomyEventDetails (props) {
  
    const { dailyAstronomyEvent } = props;
  
    return (
        <div className='center'>
        <h4> {dailyAstronomyEvent.title}</h4>
        <p> Image Credit &amp; Copyright: </p>
        <hr/>
        <p> Explanation : {dailyAstronomyEvent.explanation} </p>
      </div>
    );
  };