import React,{useState,useEffect} from "react";
import axios from "axios";
import {MakeCard} from "../components/nasaCard";
import {Kyle} from "../data/data";

export default function CreateCard(){
    
    const today = new Date().toISOString().slice(0, 10);
    const [year, setYear] = useState(today);
    const [nasa, setNasa] = useState(null);
    useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=qCaZmTCH37IJ3zg81sTyn4PMYoKJIcCG44BmqmVj&date=${year}`)
    .then((res)=>{
        
        setNasa(res.data);
        // console.log(nasa)
    })
    },[year]);

    if(!nasa){
        return(
            <h1>loading...</h1>
        );
    }

    function addSelect(){
        if(!(document.querySelector('.select').classList.contains('hasValue'))){

            Kyle.forEach((k)=>{
                let holder = document.createElement("option");
                holder.innerText = k;
                document.querySelector('.select').appendChild(holder);
                });
                
        }
        
        document.querySelector('.select').classList.toggle('hasValue');
        console.log("toggling");
    }
    

    return(
        
        <div>
            <label>Please select years:</label>
            <select className = "select">
            {setTimeout(addSelect,1000)}
            </select>
            <button onClick = {()=>setYear(document.querySelector('.select').value)}>Submit!</button>

             <div className = "cardHolder">
            <MakeCard img = {nasa.hdurl} copyright = {nasa.copyright} explanation = {nasa.explanation} title = {nasa.title} date = {nasa.date}/>
            </div>
        </div>
       
    );
}