import React from 'react';
export default function Box(props){
    const { Box } = props;
    console.log(Box);
    

    return (
    <div className="box.js container">
        <p>Date: {Box.date} <br/> Title: {Box.title} </p>
        <img src = {Box.url}></img>
    
    </div>)
}