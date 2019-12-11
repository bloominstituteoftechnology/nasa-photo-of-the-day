import React, {useState, useEffect} from "react";
import axios from "axios";


useEffect(() =>{
    axios
    .get("https://images-api.nasa.gov")
    .then(response =>{
        console.log(response)
    })
})