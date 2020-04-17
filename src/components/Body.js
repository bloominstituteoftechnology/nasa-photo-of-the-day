//State?: Light Maybe 
//Props?: Strong Maybe

import React from 'react';


function NasaBody (props) {
    return (
        <article>
            <section> <img src={props.data.hdurl} alt="nasaimage" /></section>
            <section> <p>Date: {props.data.date}</p></section>
            <section> <p>Description: {props.data.explanation}</p></section>
        </article>
    )
}

export default NasaBody;