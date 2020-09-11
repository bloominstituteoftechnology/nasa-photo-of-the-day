import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import Photo from "./components/Photo";
import "./App.css";

const StyledTitle = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  font-size: 1.5rem;
`;

export default function App() {
  const [photoOfTheDay, setPhotoOfTheDay] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}${API_KEY}`)
      .then((res) => {
        setPhotoOfTheDay(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <StyledTitle>
        <h1>NASA Photo of the Day</h1>
      </StyledTitle>
      <Photo image={photoOfTheDay} />
    </div>
  );
}
