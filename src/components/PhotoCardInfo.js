import React, {useEffect, useState} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard.js";
import styled from "styled-components";

function PhotoCardInfo (props) {

    const [photoCardInfo, setPhotoCardInfo] = useState({});   
             

    useEffect(() => {        

        axios.get(`https://api.nasa.gov/planetary/apod?date=${props.searchDate}&api_key=VjYNGY5aAvZLTuRiDVKuLo9NbhJ4J2ezIZL50oL1`)
        .then(response => {  

        console.log("server response", response.data);        
        
        //assign the response from the server to photoCardInfoResponse
        const photoCardInfoResponse = response.data;
        setPhotoCardInfo(photoCardInfoResponse);

        })
        .catch(error => {
            console.log("server error response", error.message);           
        })

        //it is important to include props.searchDate in the dependency array or the image will not change
    }, [props.searchDate]); 
 

    return (       

    <div className = "photo-map-div">

        {/*if photoCardInfo does not contain any information, a div with "loading..." is dispayed on the screen */}
        { photoCardInfo ?
            
                <PhotoCard key = {photoCardInfo.url}
                        title = {photoCardInfo.title}                        
                        url = {photoCardInfo.url} 
                        explanation = {photoCardInfo.explanation} />

        : <div>Loading.....</div>
        
        }                    

    </div> 
        
    );

}//end PhotoCardInfo

export default PhotoCardInfo;
