import React, {useState, useEffect} from "react"
import axios from "axios"
import ImageCard from "./imageCard.js"    


export default function Card(){
    const [card, setCard] = useState([]);
    const [date, setDate] = useState("");

  function handleChange(e) {
    setDate(e.target.value);
  }  
    useEffect(() => {
         axios  
        .get(`https://api.nasa.gov/planetary/apod?api_key=zlqB9lUQl36nWqt1XGT211C1EaSx154A3bZVbvUW&date=${date}`)
        .then (response => {
         const image = response.data;
             console.log("data here", image);
             setCard(image);
        })
        .catch (err => {
             console.log(err)
        })
    }, [date]);
        
    return (
        <div className="container">
            <div className="entry">
                <ImageCard 
                    titleOf={card.title}
                    dateOf={card.date}
                    key={card.id} 
                    picture={card.url} 
                    author={card.copyright}
                    description={card.explanation}
                    handleChange={handleChange}
                />
            </div> 
        </div>
    ) 
}