import React,{useState,useEffect} from "react";
import axios from "axios";
import {MakeCard} from "../components/nasaCard";

export default function CreateCard(){
    const [year, setYear] = useState(2019);
    const [nasa, setNasa] = useState(null);
    useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=qCaZmTCH37IJ3zg81sTyn4PMYoKJIcCG44BmqmVj&date=2018-10-27`)
    .then((res)=>{
        console.log(res);
        setNasa(res.data);
        console.log(nasa)
    })
    },[]);
    
    if(!nasa){
        return(
            <h1>loading...</h1>
        );
    }

    return(
        <div className = "cardHolder">
            <MakeCard img = {nasa.url} copyright = {nasa.copyright} explanation = {nasa.explanation} title = {nasa.title}  />
        </div>
    );
}