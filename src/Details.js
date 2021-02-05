import React, { useState, useEffect } from 'react'
import axios from 'axios';

const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
function Details(){
    const [deets, setDeets] = useState();

   
    
    return(
        <div>
            <button className="details_button" onClick={getDeets}>Show Details</button>
            <div>{deets}</div>
        </div>
    )
}

export default Details