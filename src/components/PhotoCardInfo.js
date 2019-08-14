import React, {useEffect, useState} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard.js";

function PhotoCardInfo (props) {

    const [photoCardInfo, setPhotoCardInfo] = useState({});
    
    //const [key, setKey] = useState("");
    //const [title, setTitle] = useState("");
    //const [date, setDate] = useState("");
    //const [url, setUrl] = useState("");
    //const [explanation, setExplanation] = useState("");

    useEffect(() => {        

        axios.get("https://api.nasa.gov/planetary/apod?api_key=VjYNGY5aAvZLTuRiDVKuLo9NbhJ4J2ezIZL50oL1")
        .then(response => {  

        console.log(response.data);
        
        const photoCardInfoResponse = response.data;
        setPhotoCardInfo(photoCardInfoResponse);

        });

    }, []); 
 

    return (
        <div className = "photo-map-div">
          
            <PhotoCard key = {photoCardInfo.url}
                       title = {photoCardInfo.title} 
                       date = {photoCardInfo.date} 
                       url = {photoCardInfo.url} 
                       explanation = {photoCardInfo.explanation} />

            )}{/*end map */}        

        </div>
    );

}//end PhotoCardInfo

export default PhotoCardInfo;
