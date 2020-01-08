import  React, {useState,useEffect} from "react";
import axios from "axios";
import {picList} from "./data";
import  MovieInfo from "./MovieInfo";


const Apod = () =>{

    const[data,setData] = useState([]);

    useEffect(()=>{

        axios.get(" https://swapi.co/api/films/")

        .then(res =>{
            setData(res.data.results);
        })
    
        .catch(err=>{
            console.log("no")
        });

    },[]);
   

    console.log(data);





    return(

        <div >
           {data.map((movie,idx)=>{
               return(
                <MovieInfo 
                src = {picList[idx]} 
                key ={idx} 
                src = {picList[movie.episode_id]}
                title = {movie.title}
                episode = {movie.episode_id} />
               )
           })}
        </div>
    )


}

export default Apod;