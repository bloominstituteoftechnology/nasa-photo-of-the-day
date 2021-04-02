import React, { useState, useEffect } from "react";
import axios from "axios";
import { InfoContainer, MediaSummary } from "./Styles";

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ZZG7ii4zpuleiAXp5Jd4iMPBUvtwZiSeb687lvjF"
      )
      .then((res) => {
        console.log(res.data);
        setPhotoData(res.data);
      })
      .catch((err) => {
        console.log("oops", err);
      });
  }, []);

  return (
    <InfoContainer>
      <h1>{photoData.title}</h1>
      <p>{photoData.data}</p>
      {/* render photo conditionally */}
      {photoData.media_type === "video" ? (
        <iframe
          src={photoData.url}
          type={photoData.media_type}
          width="680px"
          height="480px"
        />
      ) : (
        <img src={photoData.url} alt={photoData.title} />
      )}
      <MediaSummary>{photoData.explanation}</MediaSummary>
      <p>{photoData.copyright}</p>
    </InfoContainer>
  );
};

export default NasaPhoto;
