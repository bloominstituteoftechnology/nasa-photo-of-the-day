import React from "react";

export default function Discription (props) {
    return (
        <div className="discription"
        style={{
            width:"100%",
        }}
        >
    <p>{props.exp}</p>
        </div>
    );
}