import React from 'react'
import './App.css'

const Body = (props) =>{
    const{nasaAPI} = props;
    return(
        <div>
            <p> Date: {nasaAPI.date} </p>
            <p> Explanation: {nasaAPI.explanation} </p>
            <img src={nasaAPI.url} alt = 'Item of the day' />
            
            
            
            
            <p> CopyRight: {nasaAPI.copyright}</p>
        </div>
    )
}

export default Body;