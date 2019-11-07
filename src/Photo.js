import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const MainPhoto = styled.img`
  width: 100vw;
`;

function Photo() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setPhoto(response.data.url);
      })
      .catch(error => {
        console.log("The photo was not returned.");
      });
  }, []);
  return (
    <div>
      <MainPhoto src={photo} alt="NASA Space Shot of the Day"></MainPhoto>
    </div>
  );
}

export default Photo;
