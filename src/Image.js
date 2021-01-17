import React from "react";
import "./Image.css"

export default function Image({ src, title }) {

    return (
        <div className="ImageAttrs">
            <img src={src} alt={title}></img>
        </div>
    )
}
