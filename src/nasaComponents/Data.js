import React from "react"
import axios from 'axios';

const Data = props => {
    const {data} = props;
    return (
        <div>
            <p>{data.copyright}</p>
            <p>{data.date}</p>
            <p>{data.explanation}</p> 
        </div>
    );
}


export default Data
