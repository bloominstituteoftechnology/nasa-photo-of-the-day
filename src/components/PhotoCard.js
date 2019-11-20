import React from 'react';

export default function PhotoCard(props) {
    return (
        <div className='container'>
            <div className='header'>
                <h1>{props.title}</h1>
                <h3>Image &copy; {props.copyright}</h3>
                <p>Photo of the day date: {props.date}</p>
                <p>Select a new date: <input type='date' id='photoDate' min='1995-06-16' max='2019-09-12'></input></p>
            </div>
            <div className='nasaPhoto'>
                <a href={props.hdurl} target='_blank'>
                <img title='Click for Full Resolution' alt={props.title} src={props.url} />
                </a>
            </div>
            <div className='explanation'>
                <h3>Photo Explanation</h3>
                <p>{props.explanation}</p>
            </div>
        </div>
    )
}
