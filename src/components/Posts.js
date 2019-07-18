import React from "react" 


    export default function Posts(props) {
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.date}</h2>
                <div>
                    <img title="Nasa video" src={props.nasaVid} />
                    <p>{props.description}</p>
                </div>
            </div>
        )
    }