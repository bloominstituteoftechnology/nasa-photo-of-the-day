import React from "react"

const Card = props => {
    console.log(props)
    return(
        <div className="nasa-card">
            <img className = "nasa-img" alt="random" src ={props.imgUrl}/>
            <h2> {props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}
export default Card