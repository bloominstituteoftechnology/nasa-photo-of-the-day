import React from "react";

const Summary = props => {
    const {summary} = props
    return (
        <div className = 'text'>
            {summary}
        </div>
    )
}

export default Summary;