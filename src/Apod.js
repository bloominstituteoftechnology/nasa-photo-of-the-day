import React from "react";
import styled from 'styled-components';

const AnyThing = styled.div`
color :  royalblue;
background:black;
margin:20px;
h2{
    color:purple;
}
img{
    border-radius:20%;
    border:2px solid hotpink;
    width: 70%;
}
iframe{
    border:2px solid hotpink;
    width: 100%;
    height: 600px;
}
`;


const Apod = props => {
        {if (props.media_type === "image") {
            return (
                <AnyThing className =  "Apod" key = {props.date}>
                    <p>Date: {props.date}</p>
            <h2>Picture of the Day: {props.title}</h2>
            <img src = {props.url} alt = "Apod"></img>
            <p>{props.explanation}</p>
                </AnyThing>
                
            );
        }
        else{
            return (
                <AnyThing className = "Apod" key = {props.date}>
                    <p className = "breathingRoom"> Date: {props.date}</p>
            <h2>Picture of the Day: {props.title}</h2>
            <iframe src = {props.url} />
            <p className = "breathingRoom">{props.explanation}</p>
                </AnyThing>
            )}
        }};
     
export default Apod;