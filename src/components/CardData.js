import React, {useState, useEffect} from "react";
import axios from "axios";

import CreateCard from "./CreateCard";


function CardData() {
    const [picture, setPicture] useState([]);
    useEffect(() => {
        axios
        .get("GET https://api. nasa.gov/planetary/apod")
        .then(response => {
            // setPicture(response);
            console.log(response);
        })
        .catch(error => [console.log("Something went wront, we couldn't get any data", error)]);
    },[]);
    return {
        <CreateCard />
    }
};


export default CardData;