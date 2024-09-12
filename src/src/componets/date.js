import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function Date(){
    const [date, setDate] = useState('');
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=ucoCfFNCX1T5tB8OwKRwbykw8wGzrbjE7SCxAINo")
        .then(response => {
            console.log(response.data);
            setDate(response.data.date);
        });
    },[]);
    return(
        <div>
            <h1>{date}</h1>
        </div>
    )
}

export default Date 