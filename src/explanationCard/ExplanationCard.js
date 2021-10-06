import React from 'react'
import "./styles.css"

const ExplanationCard = ({ data }) => {
    const { title, explanation } = data
    return (
        <body>
            <h1>{title}</h1>
            <hr />
        <div className="container">
            <p>{explanation}</p>
        </div>
        </body>
    )
}

export default ExplanationCard