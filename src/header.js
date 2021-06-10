import React from 'react'

function Head(props) {
    const { title, date } = props
    return (
        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <h2>Behold tomorrow</h2>
        </div>
    )
}
export default Head