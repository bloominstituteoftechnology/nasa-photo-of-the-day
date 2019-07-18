import React from "react";



function Nasa(props) {
    return (
        <>
            <div className="card NASA">
                {(props.media_type === "video") ?
                    <iframe className="card-img-top" width="420" height="315" src={props.src}></iframe>
                    :
                    <img className="card-img-top" src={props.hdurl} width="420" height="315"></img>}


                <h1 className="card-title TITLE">{props.title}</h1>
                <p className="DATE">{props.date}</p>
                <p className="EXPLANATION card-text">{props.explanation}</p>
            </div>
        </>
    )
}

export default Nasa;