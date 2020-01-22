import React, { useEffect } from "react";
import axios from "axios";

export default function NasaData(){
    useEffect(()=>{

        console.log("nasa component mounted")
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log("error")
        },[])
       

    },[]);
 return (<div><h1>card</h1></div>)
}