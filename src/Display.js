import React from "react"

const Display = ({ title, explanation, url, copyright }) =>{
return (
    <div>
        <h2>{title}</h2>
        <img src={url} alt={title} />
        <h4>By: {copyright}</h4>
        <p>{explanation}</p>
    </div>
    );
}

export default Display;