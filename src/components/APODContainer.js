import React, {useState, useEffect} from "react";
import axios from "axios";
import Title from "./Title";
import Image from "./Image";
import InfoContainer from "./InfoContainer";

function APODContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=tBKXIwWIVxRCJMS7Q02CQDZajQepqOxwa3hi3FkL`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log("nasa machine broke", error)
        })
    
      }, [])
  return (

    <div className="App">
      <Title title={data.title}/>
      <Image alt={data.title} url={data.url} />
      <InfoContainer date={data.date} explanation={data.explanation}/>
    </div>
  );
}

export default APODContainer;
