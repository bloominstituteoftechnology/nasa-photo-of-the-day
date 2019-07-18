import React from "react";

export default function Header ({date}) {
    return (
        <div className = "temp-header">
            <h1>🚀 NASA Photo of the Day 🚀</h1>
            <h3>{date}</h3>
        </div>
    )

}