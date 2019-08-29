import React from "react";
import styled from 'styled-components';

const PhotoContainer = (props) => {
    const urlStyle = {
        width: '400px',
        height: '300px'
    }
    console.log(props);
    
    
    return (
        <section>
            <h1>{props.data.title}<span>{props.data.date}</span></h1>
            {
                props.data.media_type === "video"
                    ? <iframe title="nasaVideo" style={urlStyle} src={props.data.url}></iframe>
                    : <img src={props.data.url} alt="awesome pic of space"/>
            }
            <p>{props.data.explanation}</p>
        </section>
    );
};

export default PhotoContainer;
