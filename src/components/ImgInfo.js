import React from "react";
// import styled from "styled-components";


const ImgInfo = props => {
    return (
        <div className="main">
            <h1>{props.title}</h1>
            <h3>{props.day}</h3>
            <img src={props.image} alt="Space"/>
            <p>{props.text}</p>
        </div>
    )
}

export default ImgInfo;