import React, {useState, useEffect} from "react";
import Card from "./Card";
import axios from "axios";

function CardHolder(props) {
    const [card, setCard] = useState("");

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=SqCWTnAiuxURR2njh4OibNOUHiuGaCuTzsKywafx")
        .then(response => {
            console.log(response.data);
            setCard(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    

    return(
        <div className="cardholder">
            <Card 
                key={card.index}
                title={card.title}
                imgURL={card.hdurl}
                date={card.date}
                article={card.explanation}
                copyright={card.copyright}/>
        </div>
    );
}

export default CardHolder;