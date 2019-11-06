import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function CardCont() {
  const [astronomySubject, setAstronomySubject] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=OzNGKiMuJkWpDBCAnJBHes0Wa16NJ5YD4SlcO0DP"
      )
      .then(response => {
        setAstronomySubject(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div>
      <Card
        key={astronomySubject}
        title={astronomySubject.title}
        description={astronomySubject.explanation}
        imgUrl={astronomySubject.url}
        date={astronomySubject.date}
      />
    </div>
  );
}
