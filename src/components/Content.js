import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card"

const Content = props => {

    const [nasaInfo, updateNasaInfo] = useState([]);

    useEffect(() => {
        {axios
            .get('https://api.nasa.gov/planetary/apod?api_key=0eCAfzcU6VICeD5eWsXoPfhU6HQqG5T44OB21qdD')
            .then(res => { 
                updateNasaInfo(res.data)
                console.log(res)
            }).catch(error => 
                console.log("Error!", error))}
    }, []);

    return (
        <div>
                <Card date = {nasaInfo.date}  explanation = {nasaInfo.explanation} title = {nasaInfo.title} date = {nasaInfo.date} date= {nasaInfo.date} imgUrl = {nasaInfo.hdurl} />  
          </div>         
            );        
};

export default Content;
