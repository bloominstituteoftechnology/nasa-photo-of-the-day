import React from 'react'
import './App.css'

const Body = (props) =>{
    const{nasaAPI} = props;
    return(
        <div>
            <p> {nasaAPI.date} </p>
            <p>{nasaAPI.title}</p>
            <p> {nasaAPI.explanation} </p>
            <img src={nasaAPI.url} alt = 'NASA Photo of the Day' />
            <p> Copyright: {nasaAPI.copyright}</p>
        </div>
    )
}

export default Body;