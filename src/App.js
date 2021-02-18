import React from "react";
import "./App.css";
import Header from "./Header";
import Center from "./Center";
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "./constants";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dateForm = new Date();

  const [data, setData] = useState([]);
  const [date, setDate] = useState(
    dateForm.getFullYear() +
      "-" +
      ("0" + (dateForm.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + dateForm.getDate()).slice(-2)
  );
  const [daysBehind, setDaysBehind] = useState(0);
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
      .then((res) => {
        setData(res.data);
        let videoCheck = res.data.url.includes("youtube");
        setIsVideo(videoCheck);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);

  //The two function below are to move the date back one day on button click, currently not working
  function moveDate() {
    setDaysBehind(daysBehind - 1);
  }

  useEffect(() => {
    dateForm.setDate(dateForm.getDate() + daysBehind);
    setDate(
      dateForm.getFullYear() +
        "-" +
        ("0" + (dateForm.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + dateForm.getDate()).slice(-2)
    );
    console.log(dateForm);
    console.log(date);
  }, [daysBehind]);

  return (
    <div className="App">
      <Header data={data} />
      <img
        src="http://logosvg.com/wp-content/uploads/2016/09/NASA_logo.png"
        alt="NASA Logo"
        style={{ alignSelf: "center", width: "125px", margin: "0", top: "0px" }}
      />
      <div style={{ display: "flex", alignSelf: "center" }}>
        <button style={{ width: "100%" }} onClick={moveDate}>
          See Another Photo
        </button>
      </div>
      <Center data={data} isVideo={isVideo} />
    </div>
  );
}

export default App;
