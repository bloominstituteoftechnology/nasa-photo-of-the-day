import React, { useState, useEffect } from "react";
import ComponentTwo from "./Component2";
import axios from "axios";

export default function ComponentOne() {
    const [pictures, setPictures]= useState([]);

    useEffect(()=> {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        // axios.get(`https://api.nasa.gov/planetary/apod?date=today`)
        // axios.get(`https://api.nasa.gov/planetary/apod?hd=False`)
        .then(response => {
            // const photo = response.data;
            console.log(response)
        })
        .catch(error => {
            console.log("No data returned", error);
        });
    },[]);
    return(
        <div className="container">
        <button onClick={() => setPictures("shuttle")}>Shuttle</button>
        <h1>NASA Planetary</h1>
        {pictures.map(item => {
            return (
                <ComponentTwo/>
            )
        })}
        </div>
    
    
        )
}