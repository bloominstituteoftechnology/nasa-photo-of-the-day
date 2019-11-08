import React,{useState,useEffect} from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";

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
        
        <div className="infoHome">
            <Typography variant="h6">
            Image of Today:
            </Typography>

            <br></br>

            <Typography variant="h5">
            {imgData.title}
            </Typography>

            <br></br>

            <Typography component="p">
            {imgData.date}
            </Typography>

            {/* <Typography component="p">
            {imgData.explanation}
            </Typography> */}
        </div>

        <img src={imgData.hdurl}></img>
        </div>
    );
};

export default NasaImgCard;