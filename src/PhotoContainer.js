import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

export default function PhotoContainer(props) {

  const { data } = props;
  //  const { copyright, date, explanation, hdurl, title, url } = props;
  console.log("Data in photoContainer:", data);

   console.log("Title:", data.title);

   return (
    <div className="photo-container">
        <div className="photo">
          <img src={data.url} alt="NASA Photo Of The Day"></img>
        </div>
        
        <div className="photo-info">
          <div>
            <h3>Name: {data.title}</h3>
            <p>By: {data.copyright}</p>
            <p>Date: {data.date}</p>
            <p>Description: {data.explanation}</p>
            {/* <p><button onClick={() => changeStatus(friend.id)}>change status</button></p> */}
          </div>
        </div>
    </div> 
   
  );

}