import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCardContainer from "./NasaCardContainer";

// https://api.nasa.gov/planetary/apod?api_key=kELRI23YxHCuOcOPyNlPGmHdXv73Vqd9mUZPPuHf
// API key kELRI23YxHCuOcOPyNlPGmHdXv73Vqd9mUZPPuHf
const NasaData = () => {
  const [nasaObj, setNasaObj] = useState({});

   useEffect(() => {
     console.log('hey')
      //https://api.nasa.gov/planetary/apod?api_key=OPfamgCyYwhJvre3PNrqYoTF4OdMQEPSYJ2XNNTg&date=1998-10-11
    axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=kELRI23YxHCuOcOPyNlPGmHdXv73Vqd9mUZPPuHf`
        )
        .then((res) => {
          console.log("Here is the res: ", res);
          setNasaObj(res.data);
        })
        .catch((err) => {
          console.log("Houston we have a problem: ", err);
        });
    },
    []);
  return (
    <div>
          <NasaCardContainer 
          title={nasaObj.title}
          hdurl={nasaObj.hdurl}
          explanation={nasaObj.explanation}
          date={nasaObj.date}
            />
    </div>
  );
}

export default NasaData;
