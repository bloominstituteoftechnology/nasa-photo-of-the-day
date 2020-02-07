import React, {useState, useEffect} from 'react';
import axios from "axios";
import Cardcreator from "./cardcreator";

const Datafetcher = () => {

    const [data,setData] = useState("")

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=pVMkN1DjKBHaNYvfFsKlnAnPNBeW7yyWrfo8FtNy')
        .then(response => {
            console.log(response)
            setData(response.data)
    })
        .catch(error => {
            console.log(error)
        })
    },[])

    return (
        <div>
            <Cardcreator data = {data}/>
        </div>
    );
}

export default Datafetcher;
