import React, {useState, useEffect} from "react"
import axios from "axios"
import ImageCard from "./imageCard.js"
//import moment from "moment";    

export default function Card(props){
    const [card, setCard] = useState([]);
   // const [date, setDate]=useState(moment().format("MMM Do YY"));
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY TOO MANY REQUESTS
    useEffect(() => {
         axios  
        .get(`https://api.nasa.gov/planetary/apod?api_key=zlqB9lUQl36nWqt1XGT211C1EaSx154A3bZVbvUW`)
        .then (response => {
         const image = response.data;
             console.log(image);
             setCard(image);
        })
        .catch (err => {
             console.log(err)
        })
    }, []);
        
    return (
        <div className="container">
            <div className="entry">
                <ImageCard 
                    titleOf={card.title}
                    dateOf={card.date}
                    key={card.id} 
                    picture={card.url} 
                    description={card.explanation}
                />
            </div> 
        </div>
    ) 
}