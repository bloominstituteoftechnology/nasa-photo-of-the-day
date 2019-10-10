import React from "react"


const PhotoCard = props => {
    return (
        <div className="photo-card" >
            <h1 style={{ "fontSize": "1.0rem", "color": "white" }}>{props.title}</h1>
            <h3>{props.date}</h3>
            <img className="apodImg" alt="from NASA's Astronomy Picture of the Day " style ={{"width" :"100%", "height" : "100%"}} src={props.imgUrl} />
            <p style = {{"color":"white"}}><h3>Description: </h3> {props.description}</p>
        </div>
    )
}
export default PhotoCard