import React from 'react'



    const APOD = (props) => {
            
    const {title, url, explanation, date} = props
        console.log(props)
        return (
        <div className= 'body'>
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
       </div>
    );
};

export default APOD
