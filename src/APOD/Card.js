import React from "react";
export default function Card(props){
    const { data } = props
    console.log(props)
    console.log('Hello I am the render of Card.js')
    return (
    <div className="Card">
        <img src={data.url} alt=""/>
        <h2>{data.title}</h2>
        <h3>{data.date}</h3>
        <p>{data.explanation}</p>
    </div>
    )
}