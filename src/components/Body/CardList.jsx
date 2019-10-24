import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CardList() {
    const [cards, setCards] = useState("")
    console.log(cards)

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=eccuofTscc4oNyjRB6AamIcZm8k43l3eZQmlU0UB`)
          .then(response => {
            console.log(response);
            setCards(response.data);
          })
          .catch(error => {
            console.log(`The error was: ${error}`);
          });
    }, []);
    
    return (
        <div>  
            <h1>{cards.title}</h1>
            <img src={cards.url} />
            <p>{cards.date}</p>
        </div>
    );
}