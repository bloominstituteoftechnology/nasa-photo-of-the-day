import React from 'react'


export default function Info(props){
    const {copywrite, date, explanation} = props

    return(
        <div>
            <span>{copywrite}</span>
    <span>{date}</span>
    <p>{explanation}</p>
        </div>
    )
}

