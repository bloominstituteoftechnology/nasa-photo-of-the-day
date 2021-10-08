import { API_KEY } from "../../constants/constants";

import { StyledCard } from "./StyledCard.js";

import axios from "axios";
import React, { useState, useEffect } from "react";

import Title from "./Title/Title.js";
import Date from "./Date/Date.js";
import Image from "./Image/Image.js";
import Explanation from "./Explanation/Explanation.js";
import StyledLoader from "./StyledLoader/StyledLoader.js";

export default function Card() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // using this hook only on mount, so that the api only calls once per render. Doing this by setting the second parameter in the useEffect hook to an empty array, since the value of the array can't change, then the first param will only run once after the return in this component. Personal note: First the dom is made, then the useEffect is called, then the dom is painted again. The dom re renders because there was a change in state too.
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=true`)
      .then((res) => {
        setCardData(res.data);
        // The card requires a "url" property, a "title" property, and a "explination" property.
      })
      .catch((err) => {
        // If there is an error, then the loading screen will render.
        setCardData(null);
      });
  }, []);

  return (
    <StyledCard>
      {cardData ? (
        <>
          <Image imageUrl={cardData.url} />

          <div className="text-content">
            <Date date={cardData.date} />
            <Title title={cardData.title} />
            <Explanation explanation={cardData.explanation} />
          </div>
        </>
      ) : (
        <StyledLoader></StyledLoader>
      )}
    </StyledCard>
  );
}
