import React from "react";

const Caption = props => {
    const { data } = props;

    return (
        <div>
            <p>Date: {data.date}</p>
            <p>{data.explanation}</p>
        </div>
    )
}

export default Caption;