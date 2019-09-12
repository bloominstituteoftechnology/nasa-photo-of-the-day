import React, { useState, useEffect } from "react";
import ComponentTwo from "./Component2";
import axios from "axios";

export default function ComponentOne() {
    
    const [nasa, setNasa]= useState({});
    // const [explanation, setExplanation]= useState("");
    // const [hdurl, setHdurl]= useState("");
    // const [title, setTitle]= useState("");
    // const [copyright, setCopyright]= useState("");
    
    useEffect(()=> {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        // axios.get(`https://api.nasa.gov/planetary/apod?date=today`)
        // axios.get(`https://api.nasa.gov/planetary/apod?hd=False`)
        .then(response => {
            // const photo = response.data;
            const nasa = response.data
            console.log(`new data`, nasa);
            setNasa(nasa);
            // setDate(response.data.date);
            // setExplanation(response.data.explanation);
            // setHdurl(response.data.hdurl);
            // setTitle(response.data.title);
            // setCopyright(response.data.copyright);
        })
        .catch(error => {
            console.log("No data returned", error);
        });
    },[]);
    
    return(
        <div className="container">
          <h1>H1 Placeholder</h1>
          <ComponentTwo
          hdurl={nasa.hdurl}
          title={nasa.title}
          date={nasa.date}
          explanation={nasa.explanation}
          copyright={nasa.copyright}
        />


           
                
        </div>
        );
        
}
        
    
    
        
