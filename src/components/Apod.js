import React, { useState, useEffect} /*{useState, useEffect}*/ from "react";
import axios from "axios";
// import ApodCard from './cards/ApodCard';

import './apod.css';
//apiKey
import {apiKey} from "../private/private";

//styles


export default function Apod () {

    const [data, setData]= useState({});
  
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
       
    }, []);
    return  (<div className="mainParentDiv">
       <div className="titleHead">
            <h1>{data.title}</h1>
                <p>{data.date}</p>
        </div>
       <div className="imageDiv"
       style={{
        width:"100%",
        display:"flex",
        flexDirection:"column-reverse"
       }}
       >
           <p 
           style={{
               width:"50%",
               alignSelf:"center"
           }}
           >{data.explanation}</p>
       <img src={data.url} alt=""
       style={{
        marginTop:"10px",   
        width:"25%",
           borderRadius:"5%",
           border:"3px grey solid",
           alignSelf:"center"
       }}
       />
      </div>
        </div> 
        );

}




// class Apod extends Component {
    // state = {
    //     nasa: []
    // }
   
    // componentDidMount() {
   
    //     axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}` )
    //     .then (res => { 
    //         console.log(res)
    //     })
    //     .catch (err => {
    //         console.log(err)
    //     })
    // }
//     render() {
        
//         return (

//             <div>
//                 <p>Text here</p>
//             </div>
//         )
//     }
// }

// export default Apod

