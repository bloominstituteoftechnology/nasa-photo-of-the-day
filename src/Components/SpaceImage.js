import React, {useState, useEffect} from "react"

import axios from "axios"


export default function SpaceImg(){

const [data, setData] = useState ({})



useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=QDP6d6DdkSHE1C6A7ighhHxR7R6VenweLxWlRde5")
    .then(response => {
        console.log(response);
        setData(response.data)
    })
    .catch( error => {
        console.log("sorry no space images today", error);
    })
},[])

return (
    <div className= "App">
      
      <h1>{data.title}</h1>
        <img  className="space-image" alt="random img" src={data.hdurl}/>
        <h2>{data.date}</h2>
        <p>{data.explanation}</p>
 
    </div>
    )
}