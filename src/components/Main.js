import React from 'react';

export default function Main(props){
    const { nasaData } = props;

    return(
        <section>
            <img src={nasaData.url}></img>
            <h3>{nasaData.title}</h3>
            <div>
                <p>{nasaData.explanation}</p>
            </div>
        </section>
    )
}