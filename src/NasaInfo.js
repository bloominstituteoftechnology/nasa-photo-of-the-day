
import React from "react";
import axios from "axios";

const NasaInfo = ({title,date,url,explanation,copyright}) => {

    return (
        <div className="NasaInfo">
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{explanation}</p>
            <img src={url} alt="Astronmy Photo"></img>
            <p>{copyright}</p>
        </div>
    );
};

export default NasaInfo;

