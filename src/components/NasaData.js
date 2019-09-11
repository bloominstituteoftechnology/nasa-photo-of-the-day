
import React, {useState, useEffect} from "react";
import axios from 'axios';
import DataCard from './DataCard';

function NasaImage(){
    const [apod, setApod] = useState([]);

    useEffect(()=> {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response=> {
            const apod = response.data;
            console.log('Nasa Data: ', apod);
            setApod(apod);
        });
    }, []);

    return (
        <div className='dailyPic'>
            <h1>Testing Beep Beep</h1>
            {apod.map(apod=> {
                return(
                <DataCard 
                    title = {apod.title}
                    image = {apod.hdurl}
                    description ={apod.explanation}
                    copyright ={apod.copyright}
                />
            );
        })}
    </div>
    );
}

export default NasaImage;