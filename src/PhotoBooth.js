import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PhotoBooth(props) {
  const { data } = props;
  //console.log("passed props data", data);
  //console.log(data.url);
  // passing in { copyright, date, explanation, hdurl, title, url }

  return (
    <div className="justify-content-lg-center">
      <h3
        className="display-5"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        Courtesy of: {data.copyright}
      </h3>
      <img className="mx-auto d-block img-fluid w-100" src={data.url} alt="NASA APOD"></img>
      <h3
        className="display-5"
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        {data.date}
      </h3>
      <h4>{data.title}</h4>
      <p>{data.explanation}</p>
      <button type="button" className="btn-outline-dark">Yesterday's Photo</button>
      <button type="button" className="btn-outline-dark">Tomorrow's Photo</button>
      
    </div>
  );
}
