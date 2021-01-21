import React from 'react'

const POD =({title,date,url,explanation,copyright})=>{
    return (
        <div>
            <h2>{title}<br></br>{date}</h2>
            <img src={url} alt = "pic of the day"/>
            <p>{explanation}</p>
            <p>{copyright}</p>
        </div>
    );
}

export default POD;