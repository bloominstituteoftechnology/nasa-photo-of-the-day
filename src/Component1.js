import React from 'react'
import './App.css'

const Component1 = (props) =>{
    const{nasaAPI} = props;
    return(
        <div>
            <p> CopyRight: {nasaAPI.copyright}</p>
            <p> Date: {nasaAPI.date} </p>
            <p> Explanation: {nasaAPI.explanation} </p>
            <img src={nasaAPI.hdurl} alt = 'Item of the day' />

        </div>
    )
}

export default Component1;