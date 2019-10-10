import React from "react"


const PhotoCard = props => {
    return (
        <div className="photo-card" >
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <img className="apodImg" alt="from NASA's Astronomy Picture of the Day " src={props.imgUrl} />
            <p><h3>Description: </h3> {props.description}</p>
        </div>
    )
}
export default PhotoCard