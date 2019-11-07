import React, {useState, useEffect} from "react";
import axios from "axios";


function Photos() {
    const [photoData, setPhotoData] = useState([]);
    useEffect(()=>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response =>{
            setPhotoData(response.data)
            console.log(response.data);
        })

    },[])
    

    return (
        <img></img>
    )

       
    
}

export default Photos