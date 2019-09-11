import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ComponentOne() {
    const [pictures, setPictures]= useState([]);

    useEffect(()=> {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            // const photo = response.data;
            console.log(response)
        })
        .catch(error => {
            console.log("No data returned", error);
        });
    },[]);
    return(
        <h1>Hello!</h1>
        {pictures.map(item =>
            return (
                <
            )
            )}
    
    
    
        )
}