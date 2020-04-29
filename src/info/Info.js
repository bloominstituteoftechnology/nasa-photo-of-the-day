import React, {useState, useEffect} from "react";
import axios from "axios";
import PictureDay from "../Pic/PictureDay";
import Header from "../Header/Header";
import Explanation from "../Explanation/Explanation";


function Info() {
    const [info, setInfo] = useState([]);
    
    useEffect ( () =>{
        axios.get( "https://api.nasa.gov/planetary/apod?api_key=BuTahTEKOVfUEyqFaXEQcpddZX3mObaoe2bJWQWV")
        .then(response =>{
            console.log(response.data)
            setInfo (response.data)
        })
        .catch(err =>{
            console.log(err)
        });
    }, []);
    
    
    return (
      <div className="Header">
       <h1>Astronomy Picture of the Day</h1>
        <p><Header date = {info.date} title = {info.title} copyright = {info.copyright}/></p>
       <p><PictureDay url = {info.url}/></p>
       <p><Explanation explanation = {info.explanation}/></p>
      </div>
    );
  }
  
  export default Info;