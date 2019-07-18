import React from "react";


export default function Card({date, img, title, explanation, copyright}) {
    return (
        <div className = 'nasa-card'>
           {/* <h1>{title}</h1> */}
           {/* <img src={img} alt="hold"/> */}
           <p>{explanation}</p>
           <p>{date}</p>
           <p>{copyright}</p>
        </div>
    )

}