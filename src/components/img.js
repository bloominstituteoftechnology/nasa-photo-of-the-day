import React from "react"

export default function Img(props) {
    console.log(props);

    return (
        <div className="Img">
        <img src={props.url} alt={props.alt}/>
        </div>
    )
}

