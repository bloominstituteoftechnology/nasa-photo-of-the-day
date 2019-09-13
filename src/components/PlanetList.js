import React, { useEffect, useState } from "react";
import axios from "axios";
import PlanetCard from "./PlanetCard.js";


export default function PlanetList() {
    const [planet, setPlanet] = useState([]);


    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                const planet = response.data;
                console.log("As The World Turns", planet);
                setPlanet(planet)
            })
            .catch(error => {
                console.log("The planet was not returned", error);
            });
    }, []);

    return (
        <div>
            <PlanetCard
                url={planet.url}
                title={planet.title}
                date={planet.date}
                copyright={planet.copyright}
                explanation={planet.explanation}
            />
        </div>
    )
};





