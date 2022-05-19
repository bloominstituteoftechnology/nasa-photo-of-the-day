import React, {useState, useEffect} from "react";

const Info = props =>{
    const {copyright, date, explanation, title} = props.data;

    return (
        <div className="info-container">
            <div>Title: {title}</div>
            <div>Date: {date}</div>
            <div>{explanation}</div>
            <div>Copyright: {copyright}</div>
        </div>
    )
};

export default Info