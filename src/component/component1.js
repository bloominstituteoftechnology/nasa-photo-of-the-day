import React, { useState, useEffect } from "react";

const BigComponent = (props) => {
    const {nasaAPI} = props;
    // const { info } = props; --> Could also see it this way
    // This just means one doesn't have to keep on typing 'props' everywhere
    // like a lunatic, and can instead just refer to info as...info.
    return (
        <div>
            <p>Copyright :{nasaAPI.copyright} </p>
            <p>Date :{nasaAPI.date} </p>
            <p>Explanation :{nasaAPI.explanation} </p>
            <img src= {nasaAPI.hdurl}></img>
        </div>
  )
}

export default BigComponent;