import React from "react";
export default function Card(props){
    const { data } = props
    console.log(props)
    console.log('Hello I am the render of Card.js')
    return (
    <div className="Card">

        <div className='card-image'>
        <img src={data.hdurl} alt=""/>
        </div>
        <div className='card-info'>
        <h3>{data.title}</h3>
        <h4>{data.date}</h4>
            <div className='card-explanation'>
                <p>{data.explanation}</p>
            </div>
        </div>
    </div>
    )
}