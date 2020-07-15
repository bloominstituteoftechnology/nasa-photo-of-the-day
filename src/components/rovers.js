import React from 'react'

export default function(props){
    const {rover} = props


    return (
        <div>
            <img src={rover.img_src}></img>
            {/* <h2>{image.title}</h2>
            <p>{image.explanation}</p> */}
        </div>
    )
}