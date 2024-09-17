import React from "react";

const Body = ({ title, explanation, copyright, url}) => {
    return(
    <div>
        <h1 className = 'bodyTitle'> {title} </h1>
        <img src={url} alt={title} />
        <h3> By: {copyright} </h3>
        <p> {explanation} </p>
    </div>
)}
export default Body;