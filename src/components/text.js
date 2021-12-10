import React from "react"

export default function Text(props) {
    console.log(props);

    return (
        <div className="Text">
        <p>{props.text}</p>
        </div>
    )
}