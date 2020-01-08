import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import ApodCard from "../Components/ApodCard"

function Api() {
    const [ apod, setApod ] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2015-03-14')
            .then(response => {
                setApod(response.data);
            })
            .catch(error => {
                console.log("Error!!", error)
            });
    }, []);
    console.log(apod)

  return (
    <div className="Api">
                <ApodCard
                    key={apod.id}
                    hdurl={apod.hdurl}
                    copyright={apod.copyright}
                    date={apod.date}
                    explanation={apod.explanation}
                    
                />
    </div>
  );
}

export default Api;
