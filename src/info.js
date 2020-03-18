import React from "react";

const info = ({title, date, explanation, copyRight}) => {
    return (
        <div className = "cardInfo">
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{explanation}</p>
            <p>Photo Taken By: {copyRight}</p>
        </div>
    );
};

export default info;