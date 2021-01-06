import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PhotoBooth(props) {
  const { data } = props;
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="justify-content-lg-center">
      <h3
        className="display-5"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        Courtesy of: {data.copyright}
      </h3>
      <img
        className="mx-auto d-block img-fluid w-100"
        src={data.url}
        alt="NASA APOD"
      ></img>
      <h3
        className="display-5"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        {data.date}
      </h3>
      <h4>{data.title}</h4>
      <p>{data.explanation}</p>
      <div style={{marginTop: "2rem"}}>
        <button className="glow-on-hover" style={{ marginRight: "1rem" }}>
          Yesterday's Photo
        </button>
        <button type="button" className="glow-on-hover">
          Tomorrow's Photo
        </button>
      </div>
      <br></br>
      <br></br>
      <p style={{ paddingTop: ".5rem" }}>or choose a date!</p>
      <DatePicker
        selected={startDate}
        onSelect={(date) => setStartDate(date)}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
