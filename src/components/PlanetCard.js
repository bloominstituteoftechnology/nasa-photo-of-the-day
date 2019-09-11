import React from "react";

const PlanetCard = props => {
    return (
        <div className="planet-list" key={props.id}>
            <h2>Copyright: {props.copyright}</h2>
            <p>Explanation: {props.explanation}</p>
            <p>Date: {props.date}</p>
        </div>
    )
};

export default PlanetCard;