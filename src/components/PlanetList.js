import React, { useEffect, useState } from "react";
import axios from "axios";
import PlanetCard from "./PlanetCard.js";


export default function PlanetList() {
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=PNkbbVZPDxLC8gApaHy0mZTvEqFBUvwjQ7ns0SuP`)
            .then(response => {
                const planet = response.data;
                console.log("As The World Turns", planet);
                setPlanet(planet);
            })
            .catch(error => {
                console.log("The planet was not returned", error);
            });
    }, []);

    return (
        <div className="planet">
            {/* {planet.map(planet => { */}
            return (
                    <PlanetCard
                key={planet.id}
                copyright={planet.copyright}
                date={planet.date}
                explanation={planet.explanation}
            />
            )
        })}

        </div>
    )
};





