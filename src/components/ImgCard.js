import React from "react";

export default function ImgCard({imgURL,imgTitle,explanation}) {
    return  (
        <div className = "img-card">
            <h2>{imgTitle}</h2>
            <img src = {imgURL} style ={{maxWidth: "900px"}} alt = "nasa image of day" />
            <p>{explanation}</p>
            <br></br>
        </div>
    );
}