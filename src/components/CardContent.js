import React from "react";

const CardContent = (props) =>{
    // console.log(props)

    return(
        <div>
            <h1>{props.info.title}</h1>
            <p>{props.info.date}</p>
            <h5>{props.info.copyright}</h5>
            <img className="photo" alt="photo of the day" src={props.info.url} />
            <h4>{props.info.explanation}</h4>
            
        </div>
    )
}

export default CardContent