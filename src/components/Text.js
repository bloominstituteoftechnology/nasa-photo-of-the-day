import React from "react"

const Text = (props) => {
    const {title, exp} = props 
    return(
        <div>
            <h3>{title}</h3>
            <p>{exp}</p>
        </div>

    )
}

export default Text



