import React from "react";

export default function MainHead(props) {
    // console.log(props)
    return(
    <div className = "header">
        <div className = "headerText">
        <h1>Astronomy Picture of the Day</h1>
        <h2>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</h2>
        </div>
        <img src={props.displayPicture.url} alt="of Space"></img>
    </div>
)}