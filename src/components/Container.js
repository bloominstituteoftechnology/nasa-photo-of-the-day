import React from 'react'

function Container(props){
    return (
        <div>
            <h1>{props.nasaData.title}</h1>
            <p>{props.nasaData.date}</p>
            <img src={props.nasaData.hdurl} alt={props.nasaData.title} />
        </div>
    )
}

export default Container