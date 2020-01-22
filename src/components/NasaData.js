import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaImagecard from "./NasaImagecard";


export default function NasaData(){
    const [nasaData, setNasaData] = useState([]);
    useEffect(()=>{

        console.log("nasa component mounted")
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{
            console.log("error: ",error)
        },[])
       

    },[]);
 return (<NasaImagecard/>

     )
}