import React, {useState, useEffect} from "react";
import axios from "axios";
import CardInfo from "../components/Info";






export default function CardNasa(){
    const [newCard, setCard] = useState([]);
    console.log('These are the new cards' , newCard)

    useEffect (() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response =>{
            console.log(response);

            setCard(response.data);
        })
        .catch(error => {
            console.log("The data was not returned", error);
        });

    },[]);
    

    return (
        <div className = "wholeCardWrapper">
             <CardInfo
                 key = {newCard.id}
                 img = {newCard.url}
                 title = {newCard.title} 
                 date = {newCard.date} 
                 explanation = {newCard.explanation}
                 copyright = {newCard.copyright}
             />

        </div>
    );
}

