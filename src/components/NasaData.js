
import React, {useState, useEffect} from "react";
import axios from 'axios';
import DataCard from './DataCard';
// import styled from "styled-components";



function NasaImage(){
    const [apod, setApod] = useState([]);

    useEffect(()=> {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=vM8Vqe00mUa1fFhACqp6NCcTghOHA59JAewEskSs`).then(response=> {
            const apod = response.data;
            console.log('Nasa Data: ', apod);
            setApod(apod);
        });
    }, []);

    return (
        <div className='dailyPic'>
            <h1>Testing Beep Beep</h1>
                <DataCard 
                    title = {apod.title}
                    imageUrl = {"https://apod.nasa.gov/apod/image/1909/IRISNebulaSurroundingsNGC7023_1100.jpg"}
                    description ={apod.explanation}
                    copyright ={apod.copyright}
                />
        }
    </div>
    );
}

export default NasaImage;