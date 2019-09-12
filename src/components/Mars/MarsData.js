import React, {useState, useEffect} from "react";
import axios from 'axios';
import MarsCard from './MarsCard';

function MarsToday(){
    const [marsWeather, setMars] = useState([]);


useEffect(()=> {
    axios
    .get('https://api.nasa.gov/insight_weather/?api_key=vM8Vqe00mUa1fFhACqp6NCcTghOHA59JAewEskSs').then(response=> {
        const marsWeather = response;
        console.log('Mars Weather: ', marsWeather);
        setMars(marsWeather);
    });
}, []);

return (
    <div className="mars_weather">
        <MarsCard
            title={marsWeather.title}
        />
    </div>
    );
}

export default MarsToday;