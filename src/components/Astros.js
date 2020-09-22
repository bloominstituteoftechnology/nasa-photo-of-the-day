import React, { useEffect, useState } from "react";
import axios from "axios";
import Astro from "Astro.js";



const Astros = () =>{
    const [nasaPhotos,setNasaPhotos] = useState([]);


    useEffect(() =>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&hd=false")
        .then((re) =>{
            console.log(re);
            setNasaPhotos(re.data);
        })
        .catch((er) =>{
            console.log(er);
        })
    }, []);
    // useEffect(effectFn,[]);

    return (
        <div>
            <Astro props={nasaPhotos}/>
        </div>
    );
};

export default Astros;