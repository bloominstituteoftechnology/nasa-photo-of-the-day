import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Text(){
    const [text, setText] = useState('');
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=ucoCfFNCX1T5tB8OwKRwbykw8wGzrbjE7SCxAINo")
        .then(response => {
            console.log(response.data);
            setText(response.data.explanation);
        });
    },[]);
    return(
        <div>
            <h2>{text}</h2>
        </div>
    )
}

export default Text
