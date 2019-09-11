
import React, {useState, useEffect} from "react";
import axios from 'axios';
import DataCard from './DataCard';

function NasaImage(){
    const [NasaImages, setImages] = useState([]);
    useEffect(()=> {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response=> {
            NasaImages = response.data.img;
            console.log('Nasa Data: ', response);
            setImages(NasaImages);
        });
    }, []);

    return (
        <div className='NasaData'>
            {NasaImages.map(NasaImages=> {
                return (
                    <DataCard
                    image={NasaImages.img}/>
                );
            })}
        </div>
    );
}

export default NasaImage;