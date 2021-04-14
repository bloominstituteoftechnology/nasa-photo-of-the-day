import React from 'react';

export default function LowerSection(props){
    const {data} = props;
    return (
    <section className = "lower-section">
        <h2>{data.title}</h2>
        <p className = 'date'>{data.date}</p>
        <img src = {data.hdurl}></img>
        <p className = "explanation">{data.explanation}</p>
        <footer>&copy; {data.copyright}</footer>
    </section>
    );
}