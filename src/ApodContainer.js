import React from "react";

const ApodContainer = (props) => {
    console.log(props)
    return (
        <div className="apod_container">
            <img src={props.data.url}/>
            <h3>{props.data.date}</h3>
            <h1>{props.data.title}</h1>
            <p className="explanation">{props.data.explanation}</p>
        </div>
    );
}

export default ApodContainer;