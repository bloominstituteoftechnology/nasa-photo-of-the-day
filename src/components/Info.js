import React from "react";

const CardInfo = props => {
    console.log("CARD info", CardInfo);
    return (
        <div className = "Nasa-card">
            <div>Date: {props.date}</div>
            <div>Title: {props.title}</div>
            <div>Info: {props.explanation}</div>
            <div>Photo Taken By: {props.copyright}</div>
        </div>
    );
};

export default CardInfo;