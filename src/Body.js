import React, { useState, useEffect } from "react";
import axios from "axios";

const Picture = () => {
  const [picUrl, setPicUrl] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [explain, setExplain] = useState("");

  useEffect(() => {
    function getPhoto() {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        )
        .then(res => {
          console.log(res.data);
          setPicUrl(res.data.url);
          setDate(res.data.date);
          setTitle(res.data.title);
          setExplain(res.data.explanation);
        })

        .catch(err => console.log(err));
    }
    getPhoto();
  }, []);

  return (
    <div>
      <p style={{ color: "white", "fontSize": "0.5rem" }}>{date}</p>
      <img
        src={picUrl}
        alt="Nasa astronomy pic of the day"
        style={{ width: "60%", height: "300px" }}
      />
      <p style={{ color: "white", "fontWeight": "bold" }}>{title}</p>
      <p style={{ color: "white", "width": "90%", "margin": "auto", "fontSize": "1rem" }}>{explain}</p>
    </div>
  );
};
export default Picture;