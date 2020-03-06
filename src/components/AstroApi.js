import React, { useState, useEffect } from "react";
import axios from "axios";
import AstroCard from "./AstroCard";

function AstroApi() {
  const [astro, setAstro] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod").then(response => {
      console.log(response);
    });
  }, []);

  // Pass AstroCard Component information in here.
  return "";
}

export default AstroApi;
