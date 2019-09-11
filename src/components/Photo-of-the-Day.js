import React, {useState, useEffect} from 'react';
import ImgCard from './image-card';
import axios from 'axios';



export default function PhotoOfTheDay () {
    const [image, setImage] = useState([]);

    useEffect(() =>{
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response =>{
                const nasaImage = response.data
                console.log("Nasa API data", response);
                setImage(nasaImage);
            })
            .catch(err =>{
                console.log(`Couldn't get the requested data!`, err);
            })
    }, []);
    
    return (
        <div>
            <ImgCard
            url={image.url}
            title={image.title}
            date={image.date}
            copyright={image.copyright}
            explanation={image.explanation}
            />
        </div>
    );
}


