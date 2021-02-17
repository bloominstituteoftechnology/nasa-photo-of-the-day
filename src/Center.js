import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";

const Center = (props) => {
  const { data } = props;
  const [showDesc, setshowDesc] = useState(false);
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div className="main-photo-cont" style={style}>
      <h2>{data.title}</h2>
      <img className="main-img" src={data.url} alt="NASA of the day" />
      <button onClick={() => setshowDesc(!showDesc)}>Description</button>
      {showDesc && <div> {data.explanation} </div>}
    </div>
  );
};

export default Center;
