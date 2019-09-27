import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NasaCard from "./Components/NasaCard";

function App() {

  const [nasa, setNasa] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
            const nasa = res.data;
            console.log(nasa);
            setNasa(nasa);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    },[]);

  return (
    <div>
      {nasa.map(display => {
        return(
          <NasaCard 
          key={display.id} 
          title={display.title}
          date={display.date}
          explanation={display.explanation}
          />
        );
        })}
    </div>
  );
}

export default App;
