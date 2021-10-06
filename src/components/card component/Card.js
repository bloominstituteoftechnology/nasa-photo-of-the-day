import React, { useState, useEffect } from "react";

import axios from "axios";
import "./card.css";
import { API_KEY } from "../../constants/constants";

import Title from "./Title/Title.js";
import Date from "./Date/Date.js";
import Image from "./Image/Image.js";
import Explanation from "./Explanation/Explanation.js";

export default function Card() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // using this hook only on mount, so that the api only calls once per render. Doing this by setting the second parameter in the useEffect hook to an empty array, since the value of the array can't change, then the first param will only run once after the return in this component.
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=true`)
      .then((res) => {
        setCardData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (

    <div className="card-container">
        {console.log(cardData)}
      {cardData ? (
        <>
          <Title title={cardData.title} />
          <Date date={cardData.date} />
          <Image imageUrl={cardData.url} copyright={cardData.copyright} />
          <Explanation explanation={cardData.explanation} />
        </>
      ) : (
        console.log("loading")
      )}
    </div>
  );
}
