import React from 'react'

const Body = (props) => {
    const {title, explanation, date}=props
    return (
        <div>
            <h1>{title}</h1>
            <p>{explanation}</p>
            <p>{date}</p>
        </div>
    )
}

export default Body