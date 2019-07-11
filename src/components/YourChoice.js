import React, { useState, useEffect } from "react";
import axios from "axios";

import MediaCard from "./MediaCard";

function YourChoice() {
  const [media, updateMedia] = useState("");
  const [date, updateDate] = useState("");

  const apiKey = "HL7Cmszg6ukeCduFdzUnboaD2ummKzuYzfYIyQRL";

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true`)
      .then(res => updateMedia(res.data))
      .catch(err => console.log(err));
  }, [date]);

  return (
    <div className="your-choice-container">
      <h3>Your Choice</h3>
      {date ? <MediaCard media={media} /> : null}
    </div>
  );
}

export default YourChoice;
