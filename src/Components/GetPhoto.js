import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetPhoto(){
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=z2zIRrKCZk33OtaxyKOS8SorCEc47i0l3Ml5waWf')
            .then(response => {
                console.log(response)
                setPhoto(response.data);
            })
    }, []);

    return (
        <div>
            <h1>{photo.title}</h1>
            <h3>{photo.date}</h3>
            <img style={{width: "800px"}} src={photo.hdurl} alt={photo.title} />
            <p style={{width: "800px", textalign: "center", margin: "auto"}}>{photo.explanation}</p>
        </div>
    )
}

export default GetPhoto;