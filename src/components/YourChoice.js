import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import MediaCard from "./MediaCard";

function YourChoice() {
  const [media, updateMedia] = useState("");
  const [date, updateDate] = useState("");
  const [dateInput, updateDateInput] = useState("");

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
      <h3>Your Choice</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="dateInput">Pick a Date </label>
        <input
          type="date"
          id="date"
          value={dateInput}
          name="dateInput"
          onChange={handleChange}
        />
        <button type="submit">Go!</button>
      </form>
      {date ? <MediaCard media={media} /> : null}
    </div>
  );
}

export default YourChoice;
