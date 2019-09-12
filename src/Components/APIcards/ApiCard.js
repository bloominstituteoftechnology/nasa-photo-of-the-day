import React from "react";

 const ApiCard= props =>{

    return(
        <div className='API' key={props.index}>
        <h2>{props.title}</h2>
        <p className='date'>Date: {props.date}</p>
        <img className='info-image' src={props.url} alt='galaxy'></img>
        <p className='info-desc'>{props.explanation}</p>
        <p className='info-copyright'>Copyright: {props.copyright}</p>
    </div>
    )
}

export default ApiCard;