import React from "react"

export function Image(props){
    
    const {nasaData, setNasaData} = props
    console.log(props)


    return (
        <div>
            <h1>{nasaData.title}</h1>
            <p>{nasaData.date}</p>
            <p>{nasaData.mediaType}</p>
            <img src={nasaData.url}  alt = {nasaData.copyright}/>
            <p>{nasaData.explanation}</p>
        </div>






    )












}