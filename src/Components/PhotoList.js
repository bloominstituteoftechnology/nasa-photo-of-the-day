import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

export default function PhotoList() {
    const [info, setInfo] = useState ([]);
    useEffect(() =>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=b01o3M125UOs31tcfCvIvvi2HcbMMwmAylBG1vPd")
        .then(res => {
            console.log(res);
            setInfo(res.data)
        })
        .catch(error => {
          console.log("Data not returned", error);
        })
      },[]);
      return (
        <div className ="info">
            <PhotoCard 
            title = {info.title}
            date={info.date}
            copyright = {info.copyright}
            explanation = {info.explanation}
            photo = {info.url}
            />
        </div>
      )
    }
