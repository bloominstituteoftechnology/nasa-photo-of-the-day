import React from "react" 


    export default function Posts(props) {
        return (
            <div>
                <h1>{props.title}</h1>
                <iframe title="video" src={props.nasaVid}></iframe>
            </div>
        )
    }