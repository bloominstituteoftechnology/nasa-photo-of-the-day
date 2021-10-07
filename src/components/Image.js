import React from 'react';

export default function Image(props) {
    const {data} = props;

    return (
        <div>
            <h1>Today's date is {data.date} and today's image is {data.title}</h1>
            <img alt = "NASA IMAGE OF THE DAY!" src = {data.url}/>
            <h2>{data.explanation}</h2>
        </div>
    )
}