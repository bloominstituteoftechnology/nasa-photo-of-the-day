import React from 'react'


export default function Media(props){
    return (
        <div>
             <h1>{props.title}</h1>
             <img src={props.url}/>
        </div>
    )
}