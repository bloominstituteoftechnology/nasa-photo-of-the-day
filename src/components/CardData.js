import React, {useState, useEffect} from "react";
import axios from "axios";

import CreateCard from "./CreateCard";


function CardData() {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            setPicture(response);
            console.log("The returned response is:",response);
        })
        .catch(error => [console.log("Something went wront, we couldn't get any data", error)]);
    },[]);
    console.log("The picture returned is:",picture);
    return (
        <div className="">
        <CreateCard copyright={picture.data.copyright} date={picture.data.date} />
        </div>
    )
};


export default CardData;