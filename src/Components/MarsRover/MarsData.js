import React, { useState, useEffect } from "react";
import axios from "axios";
import MarsCard from "./MarsCard";
import '../PhotoCard/Photo.scss';
import '../MarsRover/Mars.scss';
import Logo from '../../assets/Logo.png';

export default function MarsData() {

    const [mars, setMars] = useState([]);
    // const [openDate, setOpenDate] = useState(true)
    // const [date,setDate] = useState('')

    // console.warn('state Open Button', openDate)

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=JnWo6HiIwC9BG0xa2UyobaexzaMVqCbQi9h9hs6q
        `)
        .then(res => {
            console.log(res.data.photos);

            setMars(res.data.photos);
        })
        .catch(error => {
      console.log(error);
        })

    }, [])

    return (
       
        <div className="marsWrapper"> 
         <div className="logoContainer">
            <img className="logo"src={Logo} />
            </div>
        <h1 className="marsHeading">Mars Rover Images</h1>
            <div className="marsPhoto">
                {mars.map((e) => {
                    return(
                        <MarsCard props={e.img_src} />
                        
                    )
                })}
               
                
            </div>
            
        
        </div>
    );
}

