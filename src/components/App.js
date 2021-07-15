import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";
import Title from "./Title";
import Media from "./Media";
import Explanation from "./Explanation";
import DateP from "./Date";
import styled from "styled-components";

function addDay(date) {
  var result = new Date(date);
  result.setDate(result.getDate() + 1);
  return `${result.getFullYear()}-${result.getMonth() + 1}-${
    result.getDate() + 1
  }`;
}
function subtractDay(date) {
  var result = new Date(date);
  console.log(result);
  result.setDate(result.getDate() - 1);
  return `${result.getFullYear()}-${result.getMonth() + 1}-${
    result.getDate() + 1
  }`;
}

const StyledApp = styled.div`
  background-color: theme.primaryColor;
  color: theme.secondaryColor;
`;

const StyledDate = styled.div`
  flex-direction: row;
`;
function App() {
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(new Date());
  console.log(apod.date);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${API_KEY}&date=${apod.date ? subtractDay(date) : ""}`)
      .then((res) => {
        console.log(res);
        setApod(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);

  return (
    <div className="App">
      <Title title={apod.title} />
      <StyledDate>
        <button onClick={() => setDate(subtractDay(apod.date))}>
          Previous Day
        </button>
        <DateP date={apod.date} />
        <button onClick={() => setDate(addDay(apod.date))}>Next Day</button>
      </StyledDate>
      <Media url={apod.url} media_type={apod.media_type} />

      <Explanation explanation={apod.explanation} />
    </div>
  );
}
export default App;
// <button onClick={addDays(apod.date)}>next day</button>
