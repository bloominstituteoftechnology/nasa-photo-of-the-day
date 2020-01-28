import React, { useState, useEffect }from "react";
import axios from "axios";
import ApodCard from "./ApodCard";

const ApodList= () => {
    const [apod, setApod] = useState([]);
    const [date, setDate] = useState("2019-08-14")
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
            console.log(res.data);
            setApod(res.data);
        });
    }, []);

    if (!apod) return <h3>Loading...</h3>;

    return (
        <div>
            <h1>Photo Of The Day - Stars</h1>
            <ApodCard 
                key={apod.key}
                title={apod.title}
                date={apod.date}
                explain={apod.explanation}
                imgUrl={apod.url}
            />
        </div>    
    )
}

export default ApodList;