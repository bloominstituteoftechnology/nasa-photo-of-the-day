import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Title() 
{
    const[oneTitle,setTitle] = useState({});
    useEffect(() =>{axios.get('https://api.nasa.gov/planetary/apod?api_key=C1UlGYikoKn06CZj9n5aw2HO8dRtrOnAoZDrgusn').then(
        res =>
        {
            // oneTitle = res.data;
            setTitle(res.data);
        }
    )},[]);
    return (
        <div>
            <h1>{oneTitle.title}</h1>
            <img src={oneTitle.url} alt={oneTitle.title}/>
        </div>);
}

export default Title;