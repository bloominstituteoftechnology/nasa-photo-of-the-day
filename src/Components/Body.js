import React from 'react'



function Body(props) {
    const {nasaData}=props
    return (
        <div>
            <img src= {nasaData.url} alt={nasaData.title}/>
            <p>{nasaData.explanation}</p>
        </div>
    )
}

export default Body

