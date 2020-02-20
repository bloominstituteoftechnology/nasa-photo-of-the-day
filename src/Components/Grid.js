import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card";


function Grid(){
const [nasaData, setNasaData] = useState({});

 useEffect (() => {
    axios
    .get( {/** `https://api.nasa.gov/planetary/apod?api_key=LxxuQJv9MQxooAm6LVjWmS2oVhR9BouJKu0xhYYY` */}) 
    .then(response => {
      console.log(response.data)
      setNasaData(response.data)
    })
    .catch(error => {
      console.log("Error ", error);
    });
 },[]) // [] keeps code from making infinite loop
    
    return <div>
              <Card key={nasaData.id} 
              url={nasaData.url}
              title={nasaData.title}
              date={nasaData.date}
              explanation={nasaData.explanation}
              />

    </div>
}

export default Grid;







