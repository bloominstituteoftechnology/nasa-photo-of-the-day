import React from "react"

export default function Header(props) {
    console.log(props);
    return (
        <div className="Header">
        <h1>{props.title}</h1>
        </div>
    )
}

