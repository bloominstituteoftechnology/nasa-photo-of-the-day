import React from "react";
import App from "../App";

function CreatePhoto(props){

    return(
        <div className="photoContainer">
            <h1>{props.obj.title}</h1>
            <h3>{props.obj.date}</h3>
            <img src={props.obj.url}/>
            <p>{props.obj.explanation}</p>
        </div>
    );
}

export default CreatePhoto;