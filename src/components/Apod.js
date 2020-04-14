import React, { useState, useEffect} from "react";
import axios from "axios";
import Discription from "./conainter/Discription";
import ImageCont from "./conainter/ImageCont";


// import ImageCont from "./conainter/ImageCont"

import './apod.css';
//apiKey
import {apiKey} from "../private/private";

//styles


export default function Apod () {

    const [data, setData]= useState({});
    
    const [image,setImage]= useState({});
    const [date, setDate] = useState([]);
    const [exp, setExp] = useState([]);
    const [title, setTitle] = useState([]);


    
  
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
                setImage(res.data.hdurl);
                setExp(res.data.explanation);
                // setTitle(res.data.title);
                // setDate(res.data.date);
            })
         

          
            .catch(err => {
                console.log(err);
            })
       
    }, []);
    return  (<div className="mainParentDiv">
       <div className="cardDiv">

       <div className="titleHead">
            
                <p>{data.date}</p>
        </div>
       <div className="imageDiv"
       style={{
        width:"100%",
        display:"flex",
        flexDirection:"column",
       alignItems:"center"
       }}
       >
            <ImageCont 
           image={image}
           /> 
     <Discription
                    exp={exp}
                />
    
      </div>
      </div>
        </div> 
        );

}






