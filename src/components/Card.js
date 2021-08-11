import React from "react";
// import Cards from "./Cards";

const Card = (props) =>{
    const { title, imageURL, date, explanation, copyright } = props
    return (
        <div className="card-container">
            <p>this is the card component</p>
            <h2>{title}</h2>
            <p>{date}</p>
            {console.log(imageURL)}
            <img src={imageURL}/>
            <p>{copyright}</p>
            <p>{explanation}</p>
            
        </div>
    )
}

export default Card;