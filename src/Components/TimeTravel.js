import axios from 'axios';
import React, {useEffect, useState} from 'react';

const time = props => {

    const { tdate, past, present, future, baseUrl, toGetDate, summary, video, title, image } = props;

     

    return (
        <div>
         <h2>{title}</h2>   
         <img src = {image}/>
         <p>{summary}</p>
         <button onClick = {past}>Back A Day</button>
         <button onClick = {present}>Today</button>
         <button onClick = {future}>Forward A day</button>
        </div>
    )
}

export default time; 