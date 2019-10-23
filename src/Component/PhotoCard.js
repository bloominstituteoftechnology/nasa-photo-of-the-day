import React from "react"


const PhotoCard = props => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
            <img src= {props.imgurl} alt="Nasa Astronomy Image"/>
            <div>
                <h3>Description</h3>
                <p>{props.explanation}</p>
            </div>
        </div>
    );
};

export default PhotoCard