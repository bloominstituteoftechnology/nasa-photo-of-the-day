import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Picture(){
    const [picture, setPicture] = useState('');
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=ucoCfFNCX1T5tB8OwKRwbykw8wGzrbjE7SCxAINo")
        .then(response => {
            console.log(response.data);
            setPicture(response.data.url);
        });
    },[]);
    return(
        <div>
            <img src = {picture} alt = "potd"/>
        </div>
    )
}

export default Picture 