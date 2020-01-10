import React from "react";

const PersonInfo = ({src,gender,birthYear,name}) =>{

return <div className = "container">

    <img width = "300" height = "300" alt = "character" src = {src}></img>
    <h3>{name}</h3>
    <p>{gender}</p>
    <p>Age: {birthYear}</p>
</div>

}

export default PersonInfo;