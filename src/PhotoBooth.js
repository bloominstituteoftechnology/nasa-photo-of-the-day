import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function PhotoBooth(props) {
  const { data } = props;

  console.log(data);

  return (
    <div className="justify-content-lg-center">
      <h4 style={{ marginBottom: "4rem", marginTop: "5rem" }}>{data.title}</h4>
      <img
        className="mx-auto d-block img-fluid w-100"
        src={data.url}
        alt="NASA Shot"
      ></img>
      <h3
        className="display-5"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        {data.date}
      </h3>

      <p>{data.explanation}</p>
      <div className= "d-flex justify-content-around" style={{ marginTop: "2rem"}}>
        <button className="glow-on-hover">
          <a href="https://codepen.io/artofmayhem" style={{ color: "white", textDecoration: "none" }}>
            Yesterday's Photo
          </a>
        </button>
        <button type="button" className="glow-on-hover col-example">
          <a href="https://codepen.io/artofmayhem" style={{ color: "white" , textDecoration: "none"}}>
            Tomorrow's Photo
          </a>
        </button>
      </div>
      <br></br>
      <br></br>
      <p style={{ paddingTop: ".5rem" }}>or choose a date!</p>
      <DatePicker />
    </div>
  );
}
