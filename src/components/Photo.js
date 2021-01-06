import React from 'react'

function Photo(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.data.title}</h1>
            <h2>{props.data.date}</h2>
            <img src={props.data.url} alt='Daily Nasa' />
            <p>{props.data.copyright}</p>
            <p>{props.data.explanation}</p>
        </div>
    )
}

export default Photo