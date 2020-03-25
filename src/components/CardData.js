import React, {useState, useEffect} from "react";
import axios from "axios";

import CreateCard from "./CreateCard";


function CardData() {
    const [picture, setPicture] useState([]);
    useEffect(() => {
        axios
        .get("GET https://api. nasa.gov/planetary/apod")
    })
}