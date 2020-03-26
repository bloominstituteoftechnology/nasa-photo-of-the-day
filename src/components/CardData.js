import React, {useState, useEffect} from "react";
import axios from "axios";

import dummyData from "./dummydata";
import CreateCard from "./CreateCard";
// console.log("Actual Dummy data data", Data);

function CardData() {
    // const [picture] = useState([dummyData]);
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        axios
        // "https://api.nasa.gov/planeta ry/apod?api_key=DEMO_KEY"
        .get("http://localhost/dummydata.js")
        .then(response => {
            setPicture(response);
            console.log("The returned response is:",response);
        })
        .catch(error => [console.log("Something went wrong, we couldn't get any data", error)]);
    },[]);
        // {
//     const [picture] = setPicture(Data);
// },[]);
    // console.log("The picture data returned is:",picture);
//     useEffect(() => {
        
    // setPicture({Data});
//     console.log("The dummydata file is", picture);
// },[]);

alert("The picture.copyright prop is",picture.copyright);
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