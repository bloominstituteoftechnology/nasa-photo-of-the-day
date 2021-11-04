import React, {useState, useEffect} from "react";
import style from "./Card.css";


const Card = (props) => {
    const { item } = props;
    console.log(item);
    return (
        <div className= "nasaCard">
            <h2>{item.title} </h2>
            <img src={item.url}/>
            <p>{item.explanation}</p>
            
        </div>
    )
    
}




export default Card