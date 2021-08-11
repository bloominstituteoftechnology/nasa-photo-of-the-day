import React from "react";
import Card from "./Card"

const Cards = (props) => {
    const { title, imageURL, explanation, date, copyright } = props
    return (
        <div className="cards-container">
            <p>this is the Cards component</p>
            <Card title={title} imageURL={imageURL} explanation={explanation} date={date} copyright={copyright}/>
        </div>
    )
}

export default Cards;