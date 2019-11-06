import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function NasaList() {
  const [pic, setPic] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=lBkb3kHWNbu4casyoUufq3tP6RRYPOGtteytPzab"
      )
      .then(response => {
        setPic(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="space">
      {
        <NasaCard
          date={pic.date}
          explanation={pic.explanation}
          hdurl={pic.hdurl}
          title={pic.title}
        />
      }
      )}
    </div>
  );
}
