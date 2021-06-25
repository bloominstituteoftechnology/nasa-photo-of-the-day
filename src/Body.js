import React from 'react'

function Body(props){
    const {photo, explanation} = props
    return (
    <div className = 'body'>
        <img src= {photo} alt = "Jet from a Star in Formation"/>
        <h3>More Information:</h3>
        <p> {explanation} </p>
    </div>
    )
    
}

export default Body