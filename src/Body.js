import React from 'react'

function Body(props){
    const {photo, expl} = props
    return (
    <div className = 'body'>
        <img src= {photo} alt= "nasa photo"/>
        <h3>What is it?:</h3>
        <p> {expl} </p>
    </div>
    )
    
}

export default Body