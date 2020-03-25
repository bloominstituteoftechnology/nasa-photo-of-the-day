import React, {useState, useEffect} from "react";
import axios from "axios";

import CreateCard from "./CreateCard";


function CardData() {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            setPicture(response.data);
            // console.log("The returned response is:",response.data);
        })
        .catch(error => [console.log("Something went wront, we couldn't get any data", error)]);
    },[]);
    console.log("The picture data returned is:",picture);
    return (
        <div className="">
        <CreateCard 
        copyright={picture.copyright} 
        date={picture.date} 
        explanation={picture.explanation}
        url = {picture.url}
        title = {picture.title}
        media_type = {picture.media_type}
        hdurl = {picture.hdurl}
        
          />
        </div>
    )
};


export default CardData;