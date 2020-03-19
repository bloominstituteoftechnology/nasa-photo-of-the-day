import React from "react";

const CardInfo = ({title, date, explanation, copyright}) => {
    console.log("CARD info", CardInfo);
    return (
        <div>
            <div>Date: {date}</div>
            <div>Title: {title}</div>
            <div>Info: {explanation}</div>
            <div>Photo Taken By: {copyright}</div>
        </div>
    );
};

export default CardInfo;