import React ,{useState, useEffect} from "react";
import axios from "axios";
import ApodCard from "./ApodCard"


const ApodGrid = () => {

const initialState = [];
const [apodData, setApodData] = useState(initialState);

const effectCallBackFn = () => {
    console.log('calling from fn!');
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=pVMkN1DjKBHaNYvfFsKlnAnPNBeW7yyWrfo8FtNy")
    .then(response => {
        console.log("response from api",response);
        setApodData(response.data);
    })
    .catch(error => console.log(error));
};

useEffect(effectCallBackFn, []);

console.log('initial render of apodData', apodData);
return (
<div>
    <ApodCard key = {apodData.id} hdurl= {apodData.hdurl} copyright= {apodData.copyright} date= {apodData.date} explanation= {apodData.explanation} title= {apodData.title} />
</div>
)

};





export default ApodGrid;