import React,{useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

function NasaData() {

    const [nasaInfo, setnasaInfo] = useState([]);
        
useEffect(() => {
axios
.get(`https://api.nasa.gov/planetary/apod?api_key=rDLuS1OxbD26VJPygpmoRhTKPA0l6bb4sIHGGQJi&date=2020-04-20`)
.then(res => {
    console.log("Res data : ", res);
    setnasaInfo(res.data);
})

.catch(err => {
    console.log("Err msg : ", err);
});
}, []);

return (
    <div className = "dataContainer"> 
    <NasaCard data ={nasaInfo} />
    </div>
)
}

export default NasaData;