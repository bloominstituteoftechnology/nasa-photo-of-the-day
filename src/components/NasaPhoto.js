import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCardContainer from './NasaCardContainer'

function NasaPhoto() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=8UJaXUtJqqLVsDNfeeBOjR9G8boOlgnb2SIWETho')
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => {
            console.log("The data was not returned", error)
        })
    }, []);
    return(
        <div className="nasaPhoto">
            <NasaCardContainer img={data.url} date={data.date} desc={data.explanation} copy={data.copyright} title={data.title}/>
        </div>
    )
}

export default NasaPhoto;