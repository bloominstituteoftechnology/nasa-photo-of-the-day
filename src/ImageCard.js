import React from "react"

const ImageCard= props =>{
    console.log(props);

    return(
        <div className="DayImage" key={props.date}>
            <h1>{props.title}</h1>
            <span>{props.date}</span>
            <img src={props.Img}></img>
            <p>{props.saywhat}</p>
            <h4>{props.copyright}</h4>




        </div>
    )
}
export default ImageCard;