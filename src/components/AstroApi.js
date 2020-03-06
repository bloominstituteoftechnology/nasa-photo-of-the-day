import React, { useState, useEffect } from "react";
import axios from "axios";
import AstroCard from "./AstroCard";

function AstroApi() {
  const [astro, setAstro] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=TR47EKb2u0JSiAQmqratLcSzfuqS2vtB1iCYqrf0"
      )
      .then(response => {
        setAstro(response.data);
        console.log(response.data);
      });
  }, []);

  // Pass AstroCard Component information in here.
  return (
    <div>
      <AstroCard
        image={astro.hdurl}
        title={astro.title}
        x={astro.date}
        explanation={astro.explanation}
      />
    </div>
  );
}

export default AstroApi;
