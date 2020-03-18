import React, {useState} from "react";
import info from "../src/info";
import axios from "axios";

 

function card (){
    const [newCard, setCard] = useState({});
    useEffect (()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response =>{
            console.log(response);
            setCard(response.data);
        
        })
        .catch(error =>{
            console.log("The data was not returned", error);
        });


    },[]);
    

    return (
        <div className = "Card">
            <img src = {setCard.props.url}/>
        </div>
    )
}