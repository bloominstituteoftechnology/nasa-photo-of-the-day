import React,{useState,useEffect} from "react";
import axios from "axios";
import ImgCard from "./ImgCard";

const NasaImgCard = () =>{
    const [imgData,setImgData] = useState([]);

    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=6Mx1B7rlyePC3lSSmVXa5IycvfPcJGk5C4g8FmRh`).then(response =>{
            setImgData(response.data);
            console.log(response.data);
        })
    },[]);

    return(
        <div>
        <ImgCard key={imgData.url} title={imgData.title} date={imgData.date} url={imgData.url} descrip={imgData.explanation}/>
        </div>
    );
};

export default NasaImgCard;