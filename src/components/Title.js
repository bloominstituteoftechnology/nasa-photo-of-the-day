import React from 'react';
import '../App.css'; 

const Title = (props) => {
    return (<div className="App">
    <h1>{props.title}</h1>
    <h2>{props.date}</h2>
    <h3>{props.explanation}</h3>
    <a href={props.src}>{props.src}</a>
    </div> )
}
export default Title;