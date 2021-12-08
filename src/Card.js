import React from "react";

export function Card (props){
    const { data } = props


    return (
        <div className='card'>
            <h2>{data.title}</h2>
            <p>{data.date}</p>
        <img src={data.url}/>
            <p>{data.explanation}</p>
        </div>
    )
}