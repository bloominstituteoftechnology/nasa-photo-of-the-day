import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import moment from "moment";

import MediaCard from "./MediaCard";

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5rem;
 

  @media screen and (max-width: 600px) {
    padding: 0 1rem;
    justify-content: center;
    margin: 1rem;
    width: 90%;

  input, button {
    width: 100%
    margin-top: 1rem;
  }

  button {
    background-color: black;
  }
`;

function DatePick() {
  const [media, updateMedia] = useState("");
  const [date, updateDate] = useState(moment().format("YYYY-MM-DD"));
  const [dateInput, updateDateInput] = useState("");

  console.log(date);

  const apiKey = "HL7Cmszg6ukeCduFdzUnboaD2ummKzuYzfYIyQRL";

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true&date=${date}`
      )
      .then(res => updateMedia(res.data))
      .catch(err => console.log(err));
  }, [date]);

  function handleChange(e) {
    updateDateInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateDate(dateInput);
  }

  return (
    <div className="your-choice-container">
      <MediaCard media={media} />
      <Form onSubmit={handleSubmit}>
        <label htmlFor="dateInput">Pick Today or Earlier</label>
        <input
          type="date"
          id="date"
          value={dateInput}
          name="dateInput"
          onChange={handleChange}
        />
        <button type="submit">Let's Explore!</button>
      </Form>
    </div>
  );
}

export default DatePick;
