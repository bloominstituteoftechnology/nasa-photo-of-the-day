import React, { useState, useEffect } from "react";
import ComponentTwo from "./Component2";
import axios from "axios";

export default function ComponentOne() {
    
    const [date, setDate]= useState("");
    const [explanation, setExplanation]= useState("");
    const [hdurl, setHdurl]= useState("");
    const [title, setTitle]= useState("");
    const [copyright, setCopyright]= useState("");
    
    useEffect(()=> {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        // axios.get(`https://api.nasa.gov/planetary/apod?date=today`)
        // axios.get(`https://api.nasa.gov/planetary/apod?hd=False`)
        .then(response => {
            // const photo = response.data;
            console.log(response.data.explanation);
            setDate(response.data.date);
            setExplanation(response.data.explanation);
            setHdurl(response.data.hdurl);
            setTitle(response.data.title);
            setCopyright(response.data.copyright);
        })
        .catch(error => {
            console.log("No data returned", error);
        });
    },[]);
    
    return(
        <div className="container">
          <ComponentTwo
          key={date}
          title={title}
          img={hdurl}
          description={explanation}
          copyright={copyright}/>


           
                
        </div>
        )
        
}
        
    
    
        
