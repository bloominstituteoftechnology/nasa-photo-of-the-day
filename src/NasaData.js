//Props?: Yes
//State?: Yes
import React, {useState, useEffect} from "react";
import axios from "axios";






export default function NasaData ()  {

const [nasaHook, setNasaHook] = useState();
const [error, setError] = useState();

useEffect (() => {


    axios
    .get("http://{WMTS endpoint}/1.0.0/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png")
    .then(res => setNasaHook())
    .catch(err => setError(console.log("Oops, the moon disappeared....")))

})



}