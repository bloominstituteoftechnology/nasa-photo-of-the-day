//Props?: Yes
//State?: Yes
import React, {useState, useEffect} from "react";
import axios from "axios";



// data:
// copyright: "NAO Rozhen"
// date: "2020-04-16"
// explanation: "Cruising through the inner solar system, Comet ATLAS C2019/Y4 has apparently fragmented. Multiple separate condensations within its diffuse coma are visible in this telescopic close-up from April 12, composed of frames tracking the comet's motion against trailing background stars. Discovered at the end of December 2019, this comet ATLAS showed a remarkably rapid increase in brightness in late March. Northern hemisphere comet watchers held out hope that it would become a bright nake-eye comet as it came closer to Earth in late April and May. But fragmenting ATLAS is slowly fading in northern skies. The breakup of comets is not uncommon though. This comet ATLAS is in an orbit similar to the Great Comet of 1844 (C/1844 Y1) and both may be fragments of a single larger comet."
// hdurl: "https://apod.nasa.gov/apod/image/2004/C2019Y4_20.04.13_1100px.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Comet ATLAS Breaks Up"
// url: "https://apod.nasa.gov/apod/image/2004/C2019Y4_20.04.13_1100px.jpg"


export default function NasaData ()  {

const [nasaHook, setNasaHook] = useState();
const [error, setError] = useState();

useEffect (() => {


    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=uwFm0A2Sz2njqOFFhhdPTxl5kDoTCylXcuaa1uN5")
    .then(res => console.log(res.data))
    .catch(err => setError(console.log("Oops, the moon disappeared....")))

}, [])



return (

<div></div>

)

}