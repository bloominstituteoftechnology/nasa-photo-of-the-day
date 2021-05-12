import React from "react";
import "./App.css";

export default function Image (props) {
    
    const { src, alt } = props;

    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    )
};