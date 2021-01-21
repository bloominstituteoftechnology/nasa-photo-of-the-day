import React from 'react'
import styled from 'styled-components'



    const APOD = (props) => {
            
    const {title, url, explanation, date} = props
        console.log(props)
        return (

        <div className= 'body'>
           <Style/>
       <div className="header">
       <h1>🚀🌌 Nasa's Out of This World Photo of The Day 🌌🚀</h1>
        <h3>{title}</h3>
       </div>
        <div className= 'picBox'>
           <img src={url} alt={title}/>    
        </div>
       <div className= 'description'>
    <p>{explanation}</p>
       </div>    
    <p>{date}</p>
         <Style/>
       </div>
    );
};

export default APOD

const Style = styled.div`
background: linear-gradient(95deg, #2e003b, #0c0079, #000000);
max-width: 100%;
overflow-x: hidden;

`