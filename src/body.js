import React from "react";

const Body = props => {
    const { photo } = props

    return (
        <div className="body">
            <h2>{photo.explanation}</h2>

        </div>
    )
}

export default Body;