import React, { useState, useEffect} from "react";
import axios from "axios";

import ApodCard from "./conainter/ApodCard";


// import ImageCont from "./conainter/ImageCont"

import './apod.css';
//apiKey
import {apiKey} from "../private/private";

//styles


export default function Apod () {

    
    
    const [image,setImage]= useState({});
    const [date, setDate] = useState([]);
    const [exp, setExp] = useState([]);
    const [title, setTitle] = useState([]);


    
  
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(res => {
                console.log(res.data);
                
                setImage(res.data.hdurl);
                setExp(res.data.explanation);
                setTitle(res.data.title);
                setDate(res.data.date);
            })
         

          
            .catch(err => {
                console.log(err);
            })
       
    }, []);
    return  (<div className="mainParentDiv">
       
           <div className="apod">
               
                   <ApodCard title={title} date={date} image={image} exp={exp}  />
               
           </div>
        </div> 
        );

}






