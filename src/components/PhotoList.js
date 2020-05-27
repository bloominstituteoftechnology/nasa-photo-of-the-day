//import
import React, {useState, useEffect} from "react"
import axios from "axios"
import PhotoCard from "./PhotoCard"
import { Button } from 'reactstrap';

//Create the Component
const PhotoList = () =>{
    const [photo,setPhoto] = useState({});
    //setting up the useEffect
    useEffect(()=>{
        console.log("PhotoList.invoke");
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=KCbLiN70iIg5mkf6d5DwkvFot3jwSdx2kcfyIAuR")
        .then(response =>{
            console.log("This is the response", response)
            setPhoto(response.data)
        })
        .catch(error =>{
            console.log("The data was not returned", error)
        })
    },[]);

    return(
        <div>
            {/* <h2>PhotoList</h2> */}
            
                    <PhotoCard 
                    key={photo.id}
                    date = {photo.date}
                    title = {photo.title} 
                    desc = {photo.explanation}
                    pic = {photo.url}/>
            <Button color="info">Yesterday's Photo</Button>
            <Button color="secondary"> NASA Website</Button>
        </div>
    )
}

export default PhotoList;