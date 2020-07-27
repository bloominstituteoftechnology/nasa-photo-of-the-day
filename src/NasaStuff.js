import React, { useState, useEffect } from "react";
import Apod from "./Apod";
import axios from "axios";
// nasa api https://api.nasa.gov/planetary/apod

function NasaStuff(){
    const [apod, setApod] = useState({});
  
    useEffect(() => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=S3qhd2wVOd3lgNCrmxkfcgHACURSoJFOK6K6Pfr4")
        .then(response => {
          console.log(response);
         // setApod(response);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    return (
        <div>
            <Apod 
                date = {apod.date}
                title = {apod.title}
                url = {apod.url}
                explanation = {apod.explanation} 
                />
        </div>
    );
}
export default NasaStuff;