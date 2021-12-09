import React, { useState } from "react";
import "./PictureHeading.css";


function PictureHeading(props) {
 
    console.log('Props inside of PictureHeading');
    console.log(props);

    return (<>
        <h1>{props.picture.title}</h1>
        <h4>{props.picture.copyright}</h4>
        <p>{props.picture.explanation}</p>
        </>
    )
}

export default PictureHeading;
